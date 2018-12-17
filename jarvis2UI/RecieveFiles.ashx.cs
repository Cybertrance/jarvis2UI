using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace jarvis2UI
{
    /// <summary>
    /// Summary description for RecieveFiles
    /// </summary>
    public class RecieveFiles : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String userdataPath = context.Request.PhysicalApplicationPath + $"userdata";
            if (!Directory.Exists(userdataPath))
            {
                Directory.CreateDirectory(userdataPath);
            }

            foreach (string fileName in context.Request.Files)
            {
                HttpPostedFile uploadedFile = context.Request.Files[fileName];

                uploadedFile.SaveAs(userdataPath + "\\" + uploadedFile.FileName);
            }
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