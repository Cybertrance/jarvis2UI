<%@ Page Title="Roster" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="roster.aspx.cs" Inherits="jarvis2UI.roster" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="">
        <div class="row">
            <div class="col-md-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Roster View</h2>
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
                        <div id='calendar'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- calendar modal -->
    <div id="CalendarRosterModalView" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="myModalLabel">Roster Details</h4>
                </div>
                <div class="modal-body">
                    <div id="testmodal" style="padding: 5px 20px;">
                        <form id="antoform" class="form-horizontal calender" role="form">
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Shift 1</label>
                                <div class="col-sm-9">
                                    <ul class="list-unstyled timeline widget">
                                        <li>
                                            <div class="block">
                                                <div class="block_content">
                                                    <h2 class="title">
                                                        <a>Agent #1</a>
                                                    </h2>
                                                    <div class="byline">
                                                        <span>.NET / MS Tech.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Shift 2</label>
                                <div class="col-sm-9">
                                    <ul class="list-unstyled timeline widget">
                                        <li>
                                            <div class="block">
                                                <div class="block_content">
                                                    <h2 class="title">
                                                        <a>Agent #2</a>
                                                    </h2>
                                                    <div class="byline">
                                                        <span>Customer Support</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default antoclose" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div id="rosterModal" data-toggle="modal" data-target="#CalendarRosterModalView"></div>
    <!-- /calendar modal -->
</asp:Content>
