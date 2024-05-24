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

        string rgbCode = "rgb(0, 0, 0)";

        public string RgbCode
        {
            get { return rgbCode; }
            set { rgbCode = value; }
        }

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
            RgbText.Text = $"rgb({rgb[0]}, {rgb[1]}, {rgb[2]})";
            var backgroundColor = new SolidColorBrush(Color.FromArgb(255, rgb[0], rgb[1], rgb[2]));

            ColorArea.Fill = backgroundColor;
        }

        private void GenerateNewColorsButton_Click(object sender, RoutedEventArgs e)
        {
            GenerateRgb();
        }
    }
}