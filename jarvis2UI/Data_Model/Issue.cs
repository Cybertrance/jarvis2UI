using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jarvis2UI.Data_Model
{
    public class Issue
    {
        public int IssueId { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
        public int Progress { get; set; } 
        public String Status
        {
            get
            {
                String status;

                if(Progress>=0 || Progress<=25)
                {
                    status = "Logged";
                }
                else if (Progress >= 26 || Progress <= 50)
                {
                    status = "Assigned";
                }
                else if (Progress >= 51 || Progress <= 80)
                {
                    status = "In Progress";
                }
                else
                {
                    status = "Complete";
                }

                return status;
            }
        }
        public int AssignedTo { get; set; }
        public String AssignedName { get; set; }
        public String RaisedBy { get; set; }
        public String RaisedVia { get; set; }
        public DateTime CreatedOn { get; set; }

    }
}