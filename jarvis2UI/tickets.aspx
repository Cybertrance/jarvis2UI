<%@ Page Title="Tickets" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="tickets.aspx.cs" Inherits="jarvis2UI.tickets" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="row">
        <div class="col-md-8 col-sm-8 col-xs-8">
            <div class="x_panel">
                <div class="x_title">
                    <h2><i class="fa fa-align-left"></i> Active Tickets</h2>
                    <button id='addTicketBtn' type="button" class="btn btn-success btn-lg pull-right"><i class="fa fa-plus"></i>&nbsp&nbsp&nbspAdd Ticket</button>
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">

                    <!-- start accordion -->
                    <div class="accordion" id="accordion1" role="tablist" aria-multiselectable="true">
                        <div class="panel">
                            <a class="panel-heading" role="tab" id="headingOne1" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1"
                                aria-expanded="true" aria-controls="collapseOne">
                                <h4 class="panel-title">Due Tickets</h4>
                            </a>
                            <div id="collapseOne1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                <div class="panel-body">
                                    <table class="table table-striped projects">
                                        <thead>
                                            <tr>
                                                <th style="width: 1%">Issue #</th>
                                                <th style="width: 20%">Title</th>
                                                <th>Assigned To</th>
                                                <th>Ticket Progress</th>
                                                <th>Status</th>
                                                <th style="width: 20%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <%foreach(jarvis2UI.Data_Model.Issue issue in ((jarvis2UI.Data_Model.IssueDataset)Application["IssueDataset"]).Issues.Where(issue=>issue.Progress<26))
                                                {%>
                                            <tr id="<%=issue.IssueId %>">
                                                <td><%=issue.IssueId %></td>
                                                <td>
                                                    <a><%=issue.Name %></a>
                                                    <br />
                                                    <small>Created <%=issue.CreatedOn.Date.ToShortDateString() %></small>
                                                </td>
                                                <td>
                                                    <ul class="list-inline">
                                                        <li>
                                                            <%
                                                                String assignedTo;

                                                                if(((jarvis2UI.Data_Model.SwarmProfileDataset)Application["SwarmProfileDataset"]).Profiles.Where(id=>id.EmpNumber == issue.AssignedTo).Count()>0)
                                                                {
                                                                    assignedTo = ((jarvis2UI.Data_Model.SwarmProfileDataset)Application["SwarmProfileDataset"]).Profiles.Where(id => id.EmpNumber == issue.AssignedTo).FirstOrDefault().Name;
                                                                }
                                                                else
                                                                {
                                                                    assignedTo = "Not Assigned";
                                                                }
                                                            %>
                                                            <%=assignedTo %>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td class="project_progress">
                                                    <div class="progress progress_sm">
                                                        <div class="progress-bar bg-green" role="progressbar" data-transitiongoal="<%=issue.Progress %>"></div>
                                                    </div>
                                                    <small><%=issue.Progress %>% Complete</small>
                                                </td>
                                                <td>
                                                    <%  String button = "";
                                                        if (issue.Progress > 26)
                                                        {
                                                            button = "btn-warning";
                                                        }
                                                        else
                                                        {
                                                            button = "btn-info";
                                                        } %>
                                                    <button type="button" class="btn <%=button %> btn-xs"><%=issue.Status %></button>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-primary btn-xs ticket-open"><i class="fa fa-folder"></i>View </button>
                                                    <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-check-square-o"></i>Close </a>
                                                </td>
                                            </tr>
                                            <%} %>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="panel">
                            <a class="panel-heading collapsed" role="tab" id="headingTwo1" data-toggle="collapse" data-parent="#accordion1"
                                href="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo">
                                <h4 class="panel-title">Due Next Week</h4>
                            </a>
                            <div id="collapseTwo1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="panel-body">
                                    <table class="table table-striped projects">
                                        <thead>
                                            <tr>
                                                <th style="width: 1%">Issue #</th>
                                                <th style="width: 20%">Title</th>
                                                <th>Team Members</th>
                                                <th>Ticket Progress</th>
                                                <th>Status</th>
                                                <th style="width: 20%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#</td>
                                                <td>
                                                    <a>Site Crashing</a>
                                                    <br />
                                                    <small>Created 01.01.2015</small>
                                                </td>
                                                <td>
                                                    <ul class="list-inline">
                                                        <li>
                                                            Josh Waltons
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td class="project_progress">
                                                    <div class="progress progress_sm">
                                                        <div class="progress-bar bg-blue" role="progressbar" data-transitiongoal="10"></div>
                                                    </div>
                                                    <small>10% Complete</small>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-info btn-xs">Created</button>
                                                </td>
                                                <td>
                                                    <a href="#" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i>View </a>
                                                    <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-check-square-o"></i>Close </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#</td>
                                                <td>
                                                    <a>404 Error</a>
                                                    <br />
                                                    <small>Created 02.12.2015</small>
                                                </td>
                                                <td>
                                                    <ul class="list-inline">
                                                        <li>
                                                           Adam Sandler
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td class="project_progress">
                                                    <div class="progress progress_sm">
                                                        <div class="progress-bar bg-yellow" role="progressbar" data-transitiongoal="20"></div>
                                                    </div>
                                                    <small>20% Complete</small>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-warning btn-xs">On Hold</button>
                                                </td>
                                                <td>
                                                    <a href="#" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i>View </a>
                                                    <a href="#" class="btn btn-danger btn-xs"><i class="fa fa-check-square-o"></i>Close </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end of accordion -->
                </div>
            </div>
        </div>

        <!-- Project Details panel-->
        <div class="col-md-4 col-sm-4 col-xs-4">
            <div class="x_panel">
                <div class="x_title">
                    <h2 id="ticket-panel-title"><i class="fa fa-align-left"></i>Ticket Description</h2>
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
                    <!-- start project-detail sidebar -->
                    <div class="panel-body">

                        <p id="ticket-panel-desc">
                            Click "View" on a corresponding Ticket.
                        </p>
                        <br />

                        <div class="project_detail">

                            <p class="title">Raised by</p>
                            <p id="ticket-panel-raisedby"></p>
                            <p class="title">Raised via</p>
                            <p id="ticket-panel-raisedvia"></p>
                            <p class="title">Assigned To</p>
                            <p id="ticket-panel-assignedto">
                                
                            </p>
                        </div>

                        <br />
                    </div>
                    <!-- end project-detail sidebar -->
                </div>
            </div>
        </div>

        <!-- End project details panel-->

        <!--Add Tickets Modal-->
        <div id="AddTicketModalView" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title" id="myModalLabel">New Ticket</h4>
                    </div>
                    <div class="modal-body">
                        <div id="testmodal" style="padding: 5px 20px;">
                            <form id="antoform" class="form-horizontal calender" role="form">
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Ticket Title</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="title" name="title">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Ticket Description</label>
                                    <div class="col-sm-9">
                                        <textarea class="form-control" style="height: 55px;" id="desc" name="descr"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="ticket-submit" class="btn btn-default antoclose" data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="addTicketModal" data-toggle="modal" data-target="#AddTicketModalView"></div>
    </div>
</asp:Content>
