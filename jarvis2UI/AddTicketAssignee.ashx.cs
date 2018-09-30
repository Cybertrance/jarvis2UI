using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using jarvis2UI.Data_Model;

namespace jarvis2UI
{
    /// <summary>
    /// Summary description for AddTicketAssignee
    /// </summary>
    public class AddTicketAssignee : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            int issueNumber = int.Parse(context.Request["issueNumber"]);
            String predictedTeam = context.Request["team"];

            if (((IssueDataset)context.Application["IssueDataset"]).Issues.Where(i => i.IssueId == issueNumber).Count() > 0)
            {
                int assignedAgent;

                Issue foundIssue = ((IssueDataset)context.Application["IssueDataset"]).Issues.Where(i => i.IssueId == issueNumber).FirstOrDefault();

                SwarmProfileDataset swarmPool = context.Application["SwarmProfileDataset"] as SwarmProfileDataset;
                List<SwarmProfile> matchingTeam = swarmPool.Profiles.Where(p => p.TeamName == predictedTeam).ToList();
                if (matchingTeam.Count > 0)
                {
                    // Randomly select an asignee from the team.
                    Random rnd = new Random();
                    int randomIndex = rnd.Next(matchingTeam.Count);
                    assignedAgent = matchingTeam[randomIndex].EmpNumber;

                    ((IssueDataset)context.Application["IssueDataset"]).Issues.Where(i => i.IssueId == issueNumber).FirstOrDefault().AssignedTo = assignedAgent;
                    ((IssueDataset)context.Application["IssueDataset"]).Issues.Where(i => i.IssueId == issueNumber).FirstOrDefault().Progress = 30;
                }

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