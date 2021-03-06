﻿<%@ Page Title="Roster" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="roster.aspx.cs" Inherits="jarvis2UI.roster" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="">
        <div class="row">
            <div class="col-md-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2><i class="fa fa-calendar"></i> Roster View</h2>
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

    <div id="CalendarRosterModalView" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 class="modal-title" id="rosterModalLabelTitle">Roster Details</h4>
                </div>
                <div class="modal-body" style="height:260px">
                    <div class="col-sm-12" style="padding:5px">
                        <label id="rosterModalLabel" class="col-sm-3">Shift 1</label>
                    <div class="col-sm-9">
                        <ul class="list-unstyled timeline widget">
                            <li>
                                <div class="block">
                                    <div class="block_content">
                                        <h2 class="title">
                                            <i id="roster-modal-status1" class="fa fa-circle green"></i> <span id="roster-modal-name1"> </span>
                                        </h2>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="block">
                                    <div class="block_content">
                                        <h2 class="title">
                                            <i id="roster-modal-status2" class="fa fa-circle green"></i> <span id="roster-modal-name2"> </span>
                                        </h2>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="block">
                                    <div class="block_content">
                                        <h2 class="title">
                                            <i id="roster-modal-status3" class="fa fa-circle green"></i> <span id="roster-modal-name3"> </span>
                                        </h2>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="block">
                                    <div class="block_content">
                                        <h2 class="title">
                                            <i id="roster-modal-status4" class="fa fa-circle green"></i> <span id="roster-modal-name4"> </span>
                                        </h2>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="rosterModal" data-toggle="modal" data-target="#CalendarRosterModalView"></div>
    <!-- /calendar modal -->
</asp:Content>
