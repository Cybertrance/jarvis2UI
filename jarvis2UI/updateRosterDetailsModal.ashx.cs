using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using jarvis2UI.Data_Model;
using System.Web.Script.Serialization;

namespace jarvis2UI
{
    /// <summary>
    /// Summary description for updateRosterDetailsModal
    /// </summary>
    public class updateRosterDetailsModal : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            int weekNumber = int.Parse(context.Request["weekNumber"]);
            String shiftName = context.Request["shiftName"];

            SwarmProfileDataset swarmTeams = context.Application["SwarmProfileDataset"] as SwarmProfileDataset;
            RosterDataset shift = context.Application["RosterDataset"] as RosterDataset;

            if(shift.Rosters.Where(s=>s.ShiftName==shiftName && s.Weeks.Keys.Contains(weekNumber)).Count() > 0)
            {
                Roster targetRoster = shift.Rosters.Where(s => s.ShiftName == shiftName && s.Weeks.Keys.Contains(weekNumber)).FirstOrDefault();
                List<string> resourcesForShift = new List<string>();

                foreach (int empId in targetRoster.Weeks[weekNumber])
                {
                    if(swarmTeams.Profiles.Where(p=>p.EmpNumber == empId).Count()>0)
                    {
                        SwarmProfile match = swarmTeams.Profiles.Where(p => p.EmpNumber == empId).FirstOrDefault();
                        resourcesForShift.Add(match.Name + @"/" + match.EmpNumber);
                    }
                }

                JavaScriptSerializer serializer = new JavaScriptSerializer();
                context.Response.ContentType = "text/plain";
                context.Response.Write(serializer.Serialize(resourcesForShift));

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