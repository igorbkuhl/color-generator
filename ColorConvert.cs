namespace RandomColorGenerator;

class ColorConvert
{
    public static string[] hexList = new string[3];

    public static void FromRgbToHex(byte[] rgb)
    {
        for (int i = 0; i < hexList.Length; i++)
        {
            string hexNum = Convert.ToString(rgb[i], 16);

            if (hexNum.Length == 1)
            {
                hexNum = "0" + hexNum;
            }
            hexList[i] = hexNum;
        }
    }
}
