using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
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
                ProcessDescription(newIssue.Description);

                context.Response.Write(newIssue.IssueId);
            }
        }

        public void ProcessDescription(String desc)
        {
            const String filePath = @"C:\jarvis2\Scripts\wekapredict\jarNewDefect.jarvis";
            
            // Write the ticket description to the file.
            // Check if file already exists. If yes, delete it. 
            try
            {
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }

                // Create a new file 
                using (StreamWriter sw = File.CreateText(filePath))
                {
                    sw.WriteLine(desc);
                }
            }
            catch(Exception) { }
            
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