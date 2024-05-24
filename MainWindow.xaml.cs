using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace RandomColorGenerator
{
    public partial class MainWindow : Window
    {
        private readonly Random random = new();

        private readonly byte[] rgbCode = [0, 0, 0];

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

        public void GenerateHex(byte[] rgb)
        {
            string[] hexList = new string[3];

            for (int i = 0; i < hexList.Length; i++)
            {
                string hexNum = Convert.ToString(rgb[i], 16);

                if (hexNum.Length == 1)
                {
                    hexNum = "0" + hexNum;
                }
                hexList[i] = hexNum;
            }

            HexText.Text = "#" + hexList[0] + hexList[1] + hexList[2];
        }

        private void GenerateNewColorsButton_Click(object sender, RoutedEventArgs e)
        {
            GenerateRgb();
            GenerateHex(rgbCode);
        }
    }
}