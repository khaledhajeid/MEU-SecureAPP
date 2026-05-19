using System.Security.Cryptography;
using System.Text;

namespace SecureBackend.Services
{
    public static class EncryptionHelper
    {
        private static readonly byte[] Key = Encoding.UTF8.GetBytes("MySuperSecretKey1234567890123456");
        private static readonly byte[] IV = Encoding.UTF8.GetBytes("MySuperSecretIV1");

        public static string Encrypt(string plainText)
        {
            using Aes aes = Aes.Create();
            aes.Key = Key;
            aes.IV = IV;
            using MemoryStream ms = new MemoryStream();
            using CryptoStream cs = new CryptoStream(ms, aes.CreateEncryptor(), CryptoStreamMode.Write);
            using StreamWriter sw = new StreamWriter(cs);
            sw.Write(plainText);
            sw.Close();
            return Convert.ToBase64String(ms.ToArray());
        }
    }
}