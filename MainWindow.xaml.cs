using System.Windows;
using System.Windows.Media;

namespace RandomColorGenerator;

public partial class MainWindow : Window
{
    private readonly Random random = new();

    private readonly byte[] rgbCode = [0, 0, 0];
    private readonly string[] hexCode = ColorConvert.hexList;

    public MainWindow()
    {
        InitializeComponent();
    }

    public byte[] GenerateRandomBytes(int n)
    {
        var randomBytes = new byte[n];
        random.NextBytes(randomBytes);
        return randomBytes;
    }

    public void GenerateRgb()
    {
        byte[] rgb = GenerateRandomBytes(3);

        for (int i = 0; i < rgb.Length; i++)
        {
            rgbCode[i] = rgb[i];
        }

        RgbText.Text = $"rgb({rgb[0]}, {rgb[1]}, {rgb[2]})";
        var backgroundColor = new SolidColorBrush(Color.FromArgb(255, rgb[0], rgb[1], rgb[2]));

        ColorArea.Fill = backgroundColor;
    }

    private void GenerateNewColorsButton_Click(object sender, RoutedEventArgs e)
    {
        GenerateRgb();
        ColorConvert.FromRgbToHex(rgbCode);
        HexText.Text = "#" + hexCode[0] + hexCode[1] + hexCode[2];
    }
}