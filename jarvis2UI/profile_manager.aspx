<%@ Page Title="Profile Manager" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="profile_manager.aspx.cs" Inherits="jarvis2UI.profile_manager" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="">            

            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2> <i class="fa fa-group"></i> Profile Manager</h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                      <div class="pull-right">
                        <button type="button" class="btn btn-success"> + Add User</button>
                      </div>
                      <div>
                        <table id="profilemanager-datatable" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                          <thead>
                            <tr>
                              <th>Employee #</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Contact No</th>
                              <th>Team Name</th>
                              <th>Skills</th>
                              <th>Exp in Team</th>
                              <th>Swarm Group Name</th>
                              <th>Age</th>
                              <th>Married?</th>
                              <th>No of Children</th>
                              <th>Leaves Entitled</th>
                            </tr>
                          </thead>
                          <tbody>
                              <% foreach (jarvis2UI.Data_Model.SwarmProfile profile in ((jarvis2UI.Data_Model.SwarmProfileDataset)Application["SwarmProfileDataset"]).Profiles)
                                  {%>
                              <tr>
                                  <td><%=profile.EmpNumber%></td>
                                  <td><%=profile.Name%></td>
                                  <td><%=profile.EmailId%></td>
                                  <td><%=profile.ContactNumber%></td>
                                  <td><%=profile.TeamName%></td>
                                  <td><%=profile.Skills.ToString()%></td>
                                  <td><%=profile.ExperienceInTeam%></td>
                                  <td><%=profile.SwarmGroupName%></td>
                                  <td><%=profile.Age%></td>
                                  <td><%=profile.IsMarried%></td>
                                  <td><%=profile.NumberOfChildren%></td>
                                  <td><%=profile.LeavesEntitled%></td>
                              </tr>
                                <%  } %>
                          </tbody>
                        </table>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</asp:Content>
