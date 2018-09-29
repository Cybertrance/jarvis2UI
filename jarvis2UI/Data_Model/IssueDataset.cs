using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jarvis2UI.Data_Model
{
    public class IssueDataset
    {
        private List<Issue> issues;

        public List<Issue> Issues
        {
            get { return issues; }
            set { issues = value; }
        }


        public IssueDataset()
        {
            issues = new List<Issue>();
            GenerateBaseData();
        }

        private void GenerateBaseData()
        {
            Issues.Clear();

            Issues.Add(new Issue { IssueId = 1, Name = "TestIsssue", Description = "Desc", AssignedTo = 32002, Progress = 10, RaisedBy = "System", RaisedVia = "Console" });
        }
    }
}