using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using jarvis2UI.Data_Model;

namespace jarvis2UI
{
    /// <summary>
    /// Summary description for getShiftDetails
    /// </summary>
    public class getShiftDetails : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            int empId = int.Parse(context.Request["empId"]);
            int weekNo = int.Parse(context.Request["weekNo"]);
            String shiftName="";

            RosterDataset shifts = context.Application["RosterDataset"] as RosterDataset;

            if(shifts.Rosters.Where(p=>p.Weeks.ContainsKey(weekNo) && p.Weeks[weekNo].Contains(empId)).Count()>0)
            {
                shiftName = shifts.Rosters.Where(p => p.Weeks.ContainsKey(weekNo) && p.Weeks[weekNo].Contains(empId)).FirstOrDefault().ShiftName;
            }

            context.Response.ContentType = "text/plain";
            context.Response.Write(shiftName);
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