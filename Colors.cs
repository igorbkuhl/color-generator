namespace RandomColorGenerator;

class Colors
{
    public static class Codes
    {
        private static string[] _hexCode = new string[3];
        private static float[] _hslCode = new float[3];
        private static float[] _hsvCode = new float[3];

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
            float[] hsl = Codes.HslCode;
            float h = hsl[0],
                s = hsl[1],
                l = hsl[2];

            float[] decimalRgb =
            [
                (float)rgb[0] / 255,
                (float)rgb[1] / 255,
                (float)rgb[2] / 255
            ];
            float r = decimalRgb[0],
                g = decimalRgb[1],
                b = decimalRgb[2];

            float max = float.MinValue,
                min = float.MaxValue;
            float d;

            foreach (float value in decimalRgb)
            {
                if (value > max)
                {
                    max = value;
                }

                if (value < min)
                {
                    min = value;
                }
            }

            d = max - min;
            l = (min + max) / 2;

            if (d == 0)
            {
                s = 0;
            }
            else
            {
                s = d / (1 - Math.Abs(2 * l - 1));
            }

            if (d == 0)
            {
                h = 0;
            }
            else if (max == r)
            {
                h = ((((g - b) / d) % 6) + 6) % 6;
            }
            else if (max == g)
            {
                h = (b - r) / d + 2;
            }
            else if (max == b)
            {
                h = (r - g) / d + 4;
            }

            hsl[0] = (float)Math.Round(h * 60);
            hsl[1] = (float)Math.Round(s * 100);
            hsl[2] = (float)Math.Round(l * 100);

            for (int i = 0; i < rgb.Length; i++)
            {
                Codes.HslCode[i] = hsl[i];
            }
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
    }
}
