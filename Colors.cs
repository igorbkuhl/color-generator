namespace RandomColorGenerator;

class Colors
{
    public static class Codes
    {
        private static string[] _hexCode = new string[3];
        private static float[] _hslCode = new float[3];
        private static float[] _hsvCode = new float[3];
        private static float[] _cmykCode = new float[4];
        private static float[] _oklabCode = new float[3];

        public static string[] HexCode
        {
            get { return _hexCode; }
            set { _hexCode = value; }
        }

        public static float[] HslCode
        {
            get { return _hslCode; }
            set { _hslCode = value; }
        }

        public static float[] HsvCode
        {
            get { return _hsvCode; }
            set { _hsvCode = value; }
        }

        public static float[] CmykCode
        {
            get { return _cmykCode; }
            set { _cmykCode = value; }
        }

        public static float[] OklabCode
        {
            get { return _oklabCode; }
            set { _oklabCode = value; }
        }

    }


    public static class ConvertFrom
    {
        public static void RgbToHex(byte[] rgb)
        {
            string[] hexList = Codes.HexCode;

            for (int i = 0; i < rgb.Length; i++)
            {
                string hexNum = Convert.ToString(rgb[i], 16);

                if (hexNum.Length == 1)
                {
                    hexNum = "0" + hexNum;
                }
                hexList[i] = hexNum;
            }
        }

        public static void RgbToHsl(byte[] rgb)
        {
            float r = rgb[0] / 255f;
            float g = rgb[1] / 255f;
            float b = rgb[2] / 255f;

            float max = Math.Max(r, Math.Max(g, b));
            float min = Math.Min(r, Math.Min(g, b));
            float delta = max - min;

            float h = 0f, s, l = (min + max) / 2;

            if (delta == 0)
            {
                s = 0;
            }
            else
            {
                s = delta / (1 - Math.Abs(2 * l - 1));
            }

            if (delta == 0)
            {
                h = 0;
            }
            else if (max == r)
            {
                h = ((((g - b) / delta) % 6) + 6) % 6;
            }
            else if (max == g)
            {
                h = (b - r) / delta + 2;
            }
            else if (max == b)
            {
                h = (r - g) / delta + 4;
            }

            float[] hsl = new float[3];
            hsl[0] = (float)Math.Round(h * 60);
            hsl[1] = (float)Math.Round(s * 100);
            hsl[2] = (float)Math.Round(l * 100);

            Array.Copy(hsl, Codes.HslCode, hsl.Length);
        }

        public static void RgbToHsv(byte[] rgb)
        {
            float r = rgb[0] / 255f;
            float g = rgb[1] / 255f;
            float b = rgb[2] / 255f;

            float max = Math.Max(r, Math.Max(g, b));
            float min = Math.Min(r, Math.Min(g, b));
            float delta = max - min;

            float h = 0f, s, v = max;

            if (max == 0)
            {
                s = 0;
            }
            else
            {
                s = delta / max;
            }

            if (max == min)
            {
                h = 0;
            }
            else if (max == r)
            {
                h = (g - b) / delta + (g < b ? 6 : 0);
            }
            else if (max == g)
            {
                h = (b - r) / delta + 2;
            }
            else if (max == b)
            {
                h = (r - g) / delta + 4;
            }

            h = delta != 0 ? h / 6 : h;

            float[] hsv = new float[3];
            hsv[0] = (float)Math.Round(h * 360);
            hsv[1] = (float)Math.Round(s * 100);
            hsv[2] = (float)Math.Round(v * 100);

            Array.Copy(hsv, Codes.HsvCode, hsv.Length);
        }

        public static void RgbToCmyk(byte[] rgb)
        {
            float r = rgb[0] / 255f;
            float g = rgb[1] / 255f;
            float b = rgb[2] / 255f;

            float c = 1 - r;
            float m = 1 - g;
            float y = 1 - b;
            float k = Math.Min(c, Math.Min(m, y));

            if (k < 1)
            {
                c = (c - k) / (1 - k);
                m = (m - k) / (1 - k);
                y = (y - k) / (1 - k);
            }
            else
            {
                c = 0;
                m = 0;
                y = 0;
            }

            c = (float)Math.Round(c * 100);
            m = (float)Math.Round(m * 100);
            y = (float)Math.Round(y * 100);
            k = (float)Math.Round(k * 100);

            float[] cmyk = new float[] { c, m, y, k };
            Array.Copy(cmyk, Codes.CmykCode, cmyk.Length);
        }

        public static void RgbToOklab(byte[] rgb)
        {
            float r = SrgbToLinear(rgb[0] / 255f);
            float g = SrgbToLinear(rgb[1] / 255f);
            float b = SrgbToLinear(rgb[2] / 255f);

            float l = 0.4122214708f * r + 0.5363325363f * g + 0.0514459929f * b;
            float m = 0.2119034982f * r + 0.6806995451f * g + 0.1073969566f * b;
            float s = 0.0883024619f * r + 0.2817188376f * g + 0.6299787005f * b;

            float l_ = Cbrt(l);
            float m_ = Cbrt(m);
            float s_ = Cbrt(s);

            float L = 0.2104542553f * l_ + 0.7936177850f * m_ - 0.0040720468f * s_;
            float A = 1.9779984951f * l_ - 2.4285922050f * m_ + 0.4505937099f * s_;
            float B = 0.0259040371f * l_ + 0.7827717662f * m_ - 0.8086757660f * s_;

            float[] oklab = new float[] { L, A, B };
            Array.Copy(oklab, Codes.OklabCode, oklab.Length);   
        }

        private static float SrgbToLinear(float c)
        {
            return (c <= 0.04045f) ? (c / 12.92f) : (float)Math.Pow((c + 0.055f) / 1.055f, 2.4f);
        }

        private static float Cbrt(float x)
        {
            return (x > 0) ? (float)Math.Pow(x, 1.0 / 3.0) : (x < 0) ? -(float)Math.Pow(-x, 1.0 / 3.0) : 0;
        }
    }
}
