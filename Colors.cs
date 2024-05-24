namespace RandomColorGenerator;

class Colors
{
    public static class Codes
    {
        public static string[] _hexCode = new string[3];
        private static float[] _hslCode = new float[3];

        public static string[] HexCode
        {
            get { return _hexCode; }
            set { _hexCode = value; }
        }

        public static float[] HslCode {
            get { return _hslCode; }
            set { _hslCode = value; }
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
            float[] decimalRgb =
            [
                (float)rgb[0] / 255,
                (float)rgb[1] / 255,
                (float)rgb[2] / 255
            ];
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
            hsl[2] = (min + max) / 2;

            if (d == 0)
            {
                hsl[1] = 0;
            }
            else
            {
                hsl[1] = d / (1 - Math.Abs(2 * hsl[2] - 1));
            }

            if (d == 0)
            {
                hsl[0] = 0;
            }
            else if (max == decimalRgb[0])
            {
                hsl[0] = ((((decimalRgb[1] - decimalRgb[2]) / d) % 6) + 6) % 6;
            }
            else if (max == decimalRgb[1])
            {
                hsl[0] = (decimalRgb[2] - decimalRgb[0]) / d + 2;
            }
            else if (max == decimalRgb[2])
            {
                hsl[0] = (decimalRgb[0] - decimalRgb[1]) / d + 4;
            }

            hsl[0] = (float)Math.Round(hsl[0] * 60);
            hsl[1] = (float)Math.Round(hsl[1] * 100);
            hsl[2] = (float)Math.Round(hsl[2] * 100);

            for (int i = 0; i < rgb.Length; i++)
            {
                hsl[i] = hsl[i];
            }
        }
    }
}
