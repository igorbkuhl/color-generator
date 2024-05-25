using System.Windows;
using System.Windows.Media;

namespace RandomColorGenerator;

public partial class MainWindow : Window
{
    private readonly Random random = new();

    private readonly byte[] rgbCode = [0, 0, 0];
    private readonly string[] hexCode = Colors.Codes.HexCode;
    private readonly float[] hslCode = Colors.Codes.HslCode;
    private readonly float[] hsvCode = Colors.Codes.HsvCode;
    private readonly float[] cmykCode = Colors.Codes.CmykCode;

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

        Colors.ConvertFrom.RgbToHex(rgbCode);
        HexText.Text = String.Format("#{0}{1}{2}", hexCode[0], hexCode[1], hexCode[2]);

        Colors.ConvertFrom.RgbToHsl(rgbCode);
        HslText.Text = String.Format("hsl({0}º, {1}%, {2}%)", hslCode[0], hslCode[1], hslCode[2]);

        Colors.ConvertFrom.RgbToHsv(rgbCode);
        HsvText.Text = String.Format("hsv({0}º, {1}%, {2}%)", hsvCode[0], hsvCode[1], hsvCode[2]);

        Colors.ConvertFrom.RgbToCmyk(rgbCode);
        CmykText.Text = String.Format("cmyk({0}%, {1}%, {2}%, {3}%)", cmykCode[0], cmykCode[1], cmykCode[2], cmykCode[3]);
    }
}