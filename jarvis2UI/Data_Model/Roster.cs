using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jarvis2UI.Data_Model
{
    public class Roster
    {
        public String ShiftName { get; set; }
        public Dictionary<int, List<int>> Weeks { get; set; }
    }
}