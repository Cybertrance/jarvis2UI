using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using jarvis2UI.Data_Model;

namespace jarvis2UI
{
    /// <summary>
    /// Summary description for addTicketDetails
    /// </summary>
    public class addTicketDetails : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String issueTitle = context.Request["title"];
            String issueDesc = context.Request["desc"];

            if(issueDesc!=null && issueTitle!=null)
            {
                Issue newIssue = new Issue
                {
                    IssueId = new Random(DateTime.Now.Millisecond).Next(),
                    Name = issueTitle,
                    Description = issueDesc,
                    CreatedOn = DateTime.Now,
                    RaisedBy = "System",
                    RaisedVia = "Console",
                    AssignedTo = -1
                };

                ((IssueDataset)context.Application["IssueDataset"]).Issues.Add(newIssue);
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