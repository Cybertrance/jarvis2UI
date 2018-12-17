using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace jarvis2UI
{
    /// <summary>
    /// Summary description for GetIntent
    /// </summary>
    public class GetIntent : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String intent = "error";
            String userdataPath = context.Request.PhysicalApplicationPath + $"userdata";

            if (Directory.Exists(userdataPath))
            {
                DirectoryInfo dir = new DirectoryInfo(userdataPath);
                IEnumerable<FileInfo> files = dir.EnumerateFiles();

                foreach (var file in files)
                {
                    if (file.Extension.Equals(".txt") || file.Extension.Equals(".jpg") || file.Extension.Equals(".jpeg") || file.Extension.Equals(".gif") || file.Extension.Equals(".png") || file.Extension.Equals(".bmp") || file.Extension.Equals(".mp4") || file.Extension.Equals(".flv") || file.Extension.Equals(".wmv") || file.Extension.Equals(".mkv"))
                    {
                        if (file.Extension.Equals(".mp4") || file.Extension.Equals(".flv") || file.Extension.Equals(".wmv") || file.Extension.Equals(".mkv"))
                        {
                            intent = "video";
                        }
                        else if (file.Extension.Equals(".txt"))
                        {
                            intent = "log_analytics";
                        }
                        else if (intent == "")
                        {
                            intent = "drive_failure";
                        }
                    }
                }
            }

            context.Response.Write(intent);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}