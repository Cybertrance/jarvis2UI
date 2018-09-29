using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using jarvis2UI.Data_Model;
using System.Web.Script.Serialization;

namespace jarvis2UI
{
    /// <summary>
    /// Summary description for updateTicketDetaislPane
    /// </summary>
    public class updateTicketDetaislPane : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String id = context.Request["ticketId"];

            if(id!=null)
            {
                if (((IssueDataset)context.Application["IssueDataset"]).Issues.Where(i=>i.IssueId.ToString() == id).Count() > 0)
                {
                    Issue issueDetails = ((IssueDataset)context.Application["IssueDataset"]).Issues.Where(i => i.IssueId.ToString() == id).FirstOrDefault();

                    if (((jarvis2UI.Data_Model.SwarmProfileDataset)context.Application["SwarmProfileDataset"]).Profiles.Where(d => d.EmpNumber == issueDetails.AssignedTo).Count() > 0)
                    {
                        issueDetails.AssignedName = ((jarvis2UI.Data_Model.SwarmProfileDataset)context.Application["SwarmProfileDataset"]).Profiles.Where(i => i.EmpNumber == issueDetails.AssignedTo).FirstOrDefault().Name;
                    }
                    else
                    {
                        issueDetails.AssignedName = "Not Assigned";
                    }

                    JavaScriptSerializer serializer = new JavaScriptSerializer();

                    context.Response.Write(serializer.Serialize(issueDetails));
                }
            }
        }

        public bool IsReusable
        {
            get
            {
                return true;
            }
        }
    }
}