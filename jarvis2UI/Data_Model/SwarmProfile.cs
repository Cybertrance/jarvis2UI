using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jarvis2UI.Data_Model
{
    public class SwarmProfile
    {
        public int EmpNumber { get; set; }
        public String Name { get; set; }
        public String EmailId { get; set; }
        public long ContactNumber { get; set; }
        public String TeamName { get; set; }
        public List<String> Skills { get; set; }
        public int ExperienceInTeam { get; set; }
        public String SwarmGroupName { get; set; }
        public int Age { get; set; }
        public bool IsMarried { get; set; }
        public int MyProperty { get; set; }
        public int NumberOfChildren { get; set; }
        public int LeavesEntitled { get; set; }
    }
}