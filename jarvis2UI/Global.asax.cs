using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using jarvis2UI.Data_Model;

namespace jarvis2UI
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {
            // Code that runs on application startup
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            // Init DataSets
            Application["IssueDataset"] = new IssueDataset();
            Application["SwarmProfileDataset"] = new SwarmProfileDataset();
            Application["RosterDataset"] = new RosterDataset();
        }
    }
}