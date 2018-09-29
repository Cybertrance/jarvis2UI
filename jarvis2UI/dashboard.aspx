<%@ Page Title="Dashboard" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="dashboard.aspx.cs" Inherits="jarvis2UI.dashboard" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- top tiles -->
        <div class="row tile_count">
          <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <span class="count_top"><i class="fa fa-user"></i> Total Install Base</span>
            <div class="count">2500</div>
            <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>4% </i> From last Week</span>
          </div>
          <div class="col-md-3 col-sm-5 col-xs-7 tile_stats_count">
            <span class="count_top"><i class="fa fa-clock-o"></i> Average Response Time</span>
            <div class="count">3:50 Minutes</div>
            <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>3% </i> From last Week</span>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <span class="count_top"><i class="fa fa-ticket"></i> Open Tickets</span>
            <div class="count green">2,500</div>
            <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <span class="count_top"><i class="fa fa-close"></i> Closed Tickets</span>
            <div class="count">4,567</div>
            <span class="count_bottom"><i class="red"><i class="fa fa-sort-desc"></i>12% </i> From last Week</span>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <span class="count_top"><i class="fa fa-user"></i> Tickets logged today</span>
            <div class="count">2,315</div>
            <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>
          </div>
        </div>
        <!-- /top tiles -->

        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="dashboard_graph">

              <div class="row x_title">
                <div class="col-md-6">
                  <h3>Ticket Traffic <small> Open/Closed Aggregate </small></h3>
                </div>
                <div class="col-md-6">
                  <div id="reportrange" class="pull-right" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc">
                    <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
                    <span>December 30, 2014 - January 28, 2015</span> <b class="caret"></b>
                  </div>
                </div>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <div id="chart_plot_01" class="demo-placeholder"></div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>

        </div>
        <br />

        <div class="row">

          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="x_panel tile fixed_height_320 overflow_hidden">
              <div class="x_title">
                <h2>Open Issues</h2>
                <ul class="nav navbar-right panel_toolbox">
                  <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i
                        class="fa fa-wrench"></i></a>
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
                <table class="" style="width:100%">
                  <tr>
                    <th style="width:37%;">
                    </th>
                    <th>
                      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                        <p class="">Severity</p>
                      </div>
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <p class="">Tickets</p>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <canvas class="canvasDoughnut" height="140" width="140" style="margin: 15px 10px 10px 0"></canvas>
                    </td>
                    <td>
                      <table class="tile_info">
                        <tr>
                          <td>
                            <p><i class="fa fa-square red"></i>Critical </p>
                          </td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>
                            <p><i class="fa fa-square purple"></i>High </p>
                          </td>
                          <td>20</td>
                        </tr>
                        <tr>
                          <td>
                            <p><i class="fa fa-square green"></i>Medium </p>
                          </td>
                          <td>30</td>
                        </tr>
                        <tr>
                          <td>
                            <p><i class="fa fa-square aero"></i>Low </p>
                          </td>
                          <td>35</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                <h2>Swarm Team</h2>
                <ul class="nav navbar-right panel_toolbox">
                  <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i
                        class="fa fa-wrench"></i></a>
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
                <div class="dashboard-widget-content">
                  <ul class="list-unstyled timeline widget">
                      <%foreach (jarvis2UI.Data_Model.SwarmProfile profile in jarvis2UI.Data_Model.SwarmProfileDataset.Profiles.Where(x => x.SwarmGroupName == "active_swarm"))
                          {%>
                    <li>
                      <div class="block">
                        <div class="block_content">
                          <h2 class="title">
                            <a> <i class="fa fa-circle green"></i> <%=profile.Name %></a>
                          </h2>
                          <div class="byline">
                            <span><%=profile.TeamName %></span>
                          </div>
                        </div>
                      </div>
                    </li>
                      <%} %>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="x_panel">
              <div class="x_title">
                <h2>Backlog Team</h2>
                <ul class="nav navbar-right panel_toolbox">
                  <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i
                        class="fa fa-wrench"></i></a>
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
                <div class="dashboard-widget-content">

                  <ul class="list-unstyled timeline widget">
                      <%foreach (jarvis2UI.Data_Model.SwarmProfile profile in jarvis2UI.Data_Model.SwarmProfileDataset.Profiles.Where(x => x.SwarmGroupName == "backlog_swarm"))
                          {%>
                    <li>
                      <div class="block">
                        <div class="block_content">
                          <h2 class="title">
                            <a> <i class="fa fa-circle blue"></i> <%=profile.Name %></a>
                          </h2>
                          <div class="byline">
                            <span><%=profile.TeamName %></span>
                          </div>
                        </div>
                      </div>
                    </li>
                      <%} %>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
</asp:Content>
