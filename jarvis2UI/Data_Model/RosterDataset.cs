using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using jarvis2UI.Data_Model;

namespace jarvis2UI.Data_Model
{
    public class RosterDataset
    {
        private const int r1 = 123;
        private const int r2 = 453;
        private const int r3 = 322;
        private const int r4 = 102;
        private const int r5 = 105235;
        private const int r6 = 273;
        private const int r7 = 234;
        private const int r8 = 355;
        private const int r9 = 843;
        private const int sl1 = 111421;
        private const int sl2 = 104600;
        private const int sl3 = 117989;

        private List<Roster> rosters;

        public List<Roster> Rosters
        {
            get { return rosters; }
            set { rosters = value; }
        }


        public RosterDataset()
        {
            rosters = new List<Roster>();

            GenerateBaseData();
        }

        private void GenerateBaseData()
        {
            Rosters.Clear();

            Rosters.Add(new Roster()
            {
                ShiftName = "India Shift 1",
                Weeks = new Dictionary<int, List<int>>()
            {   {40, new List<int>(){sl1,r1,r2,r3} },
                {41, new List<int>(){sl1,r1,r2,r3} },
                {42, new List<int>(){sl2,r4,r5,r6} },
                {43, new List<int>(){sl2,r4,r5,r6} },
                {44, new List<int>(){sl3,r7,r8,r9} }
            }
            });
            Rosters.Add(new Roster()
            {
                ShiftName = "India Shift 2",
                Weeks = new Dictionary<int, List<int>>()
            {   {40, new List<int>(){sl2,r4,r5,r6} },
                {41, new List<int>(){sl2,r4,r5,r6} },
                {42, new List<int>(){sl3,r7,r8,r9} },
                {43, new List<int>(){sl1,r1,r2,r3} },
                {44, new List<int>(){sl1,r1,r2,r3} }
            }
            });
            Rosters.Add(new Roster()
            {
                ShiftName = "USA Shift",
                Weeks = new Dictionary<int, List<int>>()
            {   {40, new List<int>(){sl3,r7,r8,r9} },
                {41, new List<int>(){sl3,r7,r8,r9} },
                {42, new List<int>(){sl1,r1,r2,r3} },
                {43, new List<int>(){sl3,r7,r8,r9} },
                {44, new List<int>(){sl2,r4,r5,r6} }
            }
            });
        }
    }
}