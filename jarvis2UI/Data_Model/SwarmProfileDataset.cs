using System;
using System.Collections.Generic;
using System.IO;
using System.Xml.Serialization;
using System.Linq;
using System.Web;

namespace jarvis2UI.Data_Model
{
    public class SwarmProfileDataset
    {
        //static String DATASETFILENAME = System.Web.HttpRuntime.AppDomainAppPath + @"\JarvisDatasets\SwarmProfilesDataset.xml";
        private List<SwarmProfile> profiles;

        public List<SwarmProfile> Profiles
        {
            get { return profiles; }
            set
            {
                profiles = value;
                //SerializeDataset();
            }
        }


        public SwarmProfileDataset()
        {
            profiles = new List<SwarmProfile>();

            //if (File.Exists(DATASETFILENAME))
            //{
            //    DeSerializeDataset();
            //}
            //else
            //{
                GenerateBaseData();
                //SerializeDataset();
            //}

        }

        private void GenerateBaseData()
        {
            Profiles.Clear();

            Profiles.Add(new SwarmProfile { EmpNumber = 123, Name = "Gandhi Chirag Rameshchandra", EmailId = "chirag.gandhi@cg.com", ContactNumber = 9812345678, TeamName = "VTL", Skills = new List<string> { "datapath", "controlpath", "devtest" }, ExperienceInTeam = 6, SwarmGroupName = "active_swarm", Age = 40, IsMarried = true, NumberOfChildren = 2, LeavesEntitled = 15 });
            Profiles.Add(new SwarmProfile { EmpNumber = 102, Name = "Tirodkar Yogesh Shyam", EmailId = "yogesh.tirodkar@cg.com", ContactNumber = 9823423435, TeamName = "VTL", Skills = new List<string> { "rpc", "tools", "UI" }, ExperienceInTeam = 3, SwarmGroupName = "active_swarm", Age = 35, IsMarried = true, NumberOfChildren = 1, LeavesEntitled = 12 });
            Profiles.Add(new SwarmProfile { EmpNumber = 234, Name = "Hesi Dharnendra Gumateshwar", EmailId = "dharnendra.hesi@cg.com", ContactNumber = 9935425455, TeamName = "VTL", Skills = new List<string> { "rpc", "tools", "UI" }, ExperienceInTeam = 2, SwarmGroupName = "backlog_swarm", Age = 32, IsMarried = false, NumberOfChildren = 0, LeavesEntitled = 10 });
            Profiles.Add(new SwarmProfile { EmpNumber = 345, Name = "Arunkumar Selvapillai", EmailId = "arunkumar.arunkumar@cg.com", ContactNumber = 9623423423, TeamName = "VTL", Skills = new List<string> { "datapath", "controlpath", "devtest" }, ExperienceInTeam = 5, SwarmGroupName = "backlog_swarm", Age = 38, IsMarried = true, NumberOfChildren = 1, LeavesEntitled = 10 });
            Profiles.Add(new SwarmProfile { EmpNumber = 234, Name = "Bhansali Pallavi", EmailId = "bhansali.bhansali@cg.com", ContactNumber = 9843254354, TeamName = "VTL", Skills = new List<string> { "datapath", "controlpath", "devtest" }, ExperienceInTeam = 5, SwarmGroupName = "active_swarm", Age = 39, IsMarried = true, NumberOfChildren = 2, LeavesEntitled = 15 });
            Profiles.Add(new SwarmProfile { EmpNumber = 453, Name = "Gurav Krishna Parshuram", EmailId = "krishna.gurav@cg.com", ContactNumber = 9945345346, TeamName = "NAS", Skills = new List<string> { "rpc", "tools", "UI" }, ExperienceInTeam = 2, SwarmGroupName = "backlog_swarm", Age = 32, IsMarried = false, NumberOfChildren = 0, LeavesEntitled = 13 });
            Profiles.Add(new SwarmProfile { EmpNumber = 105235, Name = "Patel Dipak Rameshbhai", EmailId = "dipak.patel@cg.com", ContactNumber = 9724232355, TeamName = "NAS", Skills = new List<string> { "datapath", "controlpath", "devtest" }, ExperienceInTeam = 5, SwarmGroupName = "backlog_swarm", Age = 38, IsMarried = true, NumberOfChildren = 1, LeavesEntitled = 16 });
            Profiles.Add(new SwarmProfile { EmpNumber = 355, Name = "Valliappan Shanmugam ", EmailId = "valliappan.valliappan@cg.com", ContactNumber = 8845345455, TeamName = "NAS", Skills = new List<string> { "rpc", "tools", "UI" }, ExperienceInTeam = 3, SwarmGroupName = "active_swarm", Age = 35, IsMarried = true, NumberOfChildren = 0, LeavesEntitled = 9 });
            Profiles.Add(new SwarmProfile { EmpNumber = 111421, Name = "Verma Arun Amarnath", EmailId = "arun.verma@cg.com", ContactNumber = 9623423455, TeamName = "NAS", Skills = new List<string> { "datapath", "controlpath", "devtest" }, ExperienceInTeam = 5, SwarmGroupName = "active_swarm", Age = 37, IsMarried = true, NumberOfChildren = 1, LeavesEntitled = 10 });
            Profiles.Add(new SwarmProfile { EmpNumber = 322, Name = "Nair T N Sooraj ", EmailId = "n.nair@cg.com", ContactNumber = 8834534562, TeamName = "Dedup", Skills = new List<string> { "rpc", "tools", "UI" }, ExperienceInTeam = 3, SwarmGroupName = "active_swarm", Age = 34, IsMarried = false, NumberOfChildren = 0, LeavesEntitled = 14 });
            Profiles.Add(new SwarmProfile { EmpNumber = 273, Name = "Salvi Priyanka Pandurang", EmailId = "priyanka.salvi@cg.com", ContactNumber = 8034534623, TeamName = "Deduplication", Skills = new List<string> { "rpc", "tools", "UI" }, ExperienceInTeam = 2, SwarmGroupName = "backlog_swarm", Age = 33, IsMarried = false, NumberOfChildren = 2, LeavesEntitled = 12 });
            Profiles.Add(new SwarmProfile { EmpNumber = 843, Name = "Bhatnagar Anshu Diwakar", EmailId = "anshu.bhatnagar@cg.com", ContactNumber = 9934534623, TeamName = "Deduplication", Skills = new List<string> { "datapath", "controlpath", "devtest" }, ExperienceInTeam = 6, SwarmGroupName = "active_swarm", Age = 42, IsMarried = true, NumberOfChildren = 0, LeavesEntitled = 11 });
            Profiles.Add(new SwarmProfile { EmpNumber = 104600, Name = "Jenitta Rexlin Antony", EmailId = "rexlin.jenitta@cg.com", ContactNumber = 9834534643, TeamName = "Deduplication", Skills = new List<string> { "datapath", "controlpath", "devtest" }, ExperienceInTeam = 5, SwarmGroupName = "backlog_swarm", Age = 36, IsMarried = true, NumberOfChildren = 1, LeavesEntitled = 14 });
            Profiles.Add(new SwarmProfile { EmpNumber = 117989, Name = "Bhatnagar Aayushi ", EmailId = "bhatnagar.bhatnagar@cg.com", ContactNumber = 9743534246, TeamName = "Deduplication", Skills = new List<string> { "datapath", "controlpath", "devtest" }, ExperienceInTeam = 6, SwarmGroupName = "active_swarm", Age = 41, IsMarried = true, NumberOfChildren = 1, LeavesEntitled = 10 });
        }

        //private void SerializeDataset()
        //{
        //    XmlSerializer xmlSerializer = new XmlSerializer(typeof(List<SwarmProfile>));
        //    TextWriter textWriter = new StreamWriter(DATASETFILENAME);
        //    xmlSerializer.Serialize(textWriter, Profiles);
        //    textWriter.Close();
        //}

        //private void DeSerializeDataset()
        //{
        //    XmlSerializer xmlSerializer = new XmlSerializer(typeof(List<SwarmProfile>));
        //    TextReader textReader = new StreamReader(DATASETFILENAME);
        //    Profiles = xmlSerializer.Deserialize(textReader) as List<SwarmProfile>;
        //    textReader.Close();
        //}
    }
}