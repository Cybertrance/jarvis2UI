using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

namespace jarvis2UI
{
    public partial class analysis : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            String userdataPath = Request.PhysicalApplicationPath + $"userdata";

            if (Directory.Exists(userdataPath))
            {
                Directory.Delete(userdataPath, true);
            }

        }
    }
}