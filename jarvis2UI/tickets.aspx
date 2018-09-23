<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="tickets.aspx.cs" Inherits="jarvis2UI.tickets" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="row">
					<div class="col-md-9 col-sm-9 col-xs-9">
						<div class="x_panel">
							<div class="x_title">
								<h2><i class="fa fa-align-left"></i> Active Tickets</h2>
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

								<!-- start accordion -->
								<div class="accordion" id="accordion1" role="tablist" aria-multiselectable="true">
									<div class="panel">
										<a class="panel-heading" role="tab" id="headingOne1" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1"
										 aria-expanded="true" aria-controls="collapseOne">
											<h4 class="panel-title">Overdue Tickets</h4>
										</a>
										<div id="collapseOne1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
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
																<a>Unresponsive UI</a>
																<br />
																<small>Created 01.01.2015</small>
															</td>
															<td>
																<ul class="list-inline">
																	<li>
																		<img src="images/user.png" class="avatar" alt="Avatar">
																	</li>
																	<li>
																		<img src="images/user.png" class="avatar" alt="Avatar">
																	</li>
																	<li>
																		<img src="images/user.png" class="avatar" alt="Avatar">
																	</li>
																	<li>
																		<img src="images/user.png" class="avatar" alt="Avatar">
																	</li>
																</ul>
															</td>
															<td class="project_progress">
																<div class="progress progress_sm">
																	<div class="progress-bar bg-green" role="progressbar" data-transitiongoal="57"></div>
																</div>
																<small>57% Complete</small>
															</td>
															<td>
																<button type="button" class="btn btn-success btn-xs">In Progress</button>
															</td>
															<td>
																<a href="#" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
																<a href="#" class="btn btn-danger btn-xs"><i class="fa fa-check-square-o"></i> Close </a>
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
																		<img src="images/user.png" class="avatar" alt="Avatar">
																	</li>
																	<li>
																		<img src="images/user.png" class="avatar" alt="Avatar">
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
																<a href="#" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
																<a href="#" class="btn btn-danger btn-xs"><i class="fa fa-check-square-o"></i> Close </a>
															</td>
														</tr>
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
																		<img src="images/user.png" class="avatar" alt="Avatar">
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
																<a href="#" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
																<a href="#" class="btn btn-danger btn-xs"><i class="fa fa-check-square-o"></i> Close </a>
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
																		<img src="images/user.png" class="avatar" alt="Avatar">
																	</li>
																	<li>
																		<img src="images/user.png" class="avatar" alt="Avatar">
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
																<a href="#" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
																<a href="#" class="btn btn-danger btn-xs"><i class="fa fa-check-square-o"></i> Close </a>
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
					<div class="col-md-3 col-sm-3 col-xs-3">
						<div class="x_panel">
							<div class="x_title">
								<h2><i class="fa fa-align-left"></i> Ticket Description</h2>
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

										<p>UI of the application feels sluggish and Unresponsive. Many hangs in the loading screen,
											tickets page and orders page. Please fix ASAP. Attached are docs retlated to issue.</p>
										<br />

										<div class="project_detail">

											<p class="title">Raised by</p>
											<p>Client Person #1</p>
											<p class="title">Raised via</p>
											<p>Chatbot</p>
											<p class="title">Assigned To</p>
											<p>Agent #1 <br>
												Agent #2 <br>
												Agent #4 <br>
											</p>
										</div>

										<br />
										<h5>Attachments</h5>
										<ul class="list-unstyled project_files">
											<li><a href=""><i class="fa fa-file-word-o"></i> Functional-requirements.docx</a>
											</li>
											<li><a href=""><i class="fa fa-file-pdf-o"></i> UAT.pdf</a>
											</li>
											<li><a href=""><i class="fa fa-mail-forward"></i> Email-from-flatbal.mln</a>
											</li>
											<li><a href=""><i class="fa fa-picture-o"></i> Logo.png</a>
											</li>
										</ul>
										<br />

										<div class="text-center mtop20">
											<a href="#" class="btn btn-sm btn-primary">Add files</a>
											<a href="#" class="btn btn-sm btn-warning">Report contact</a>
										</div>
									</div>
								<!-- end project-detail sidebar -->
							</div>
						</div>
					</div>

					<!-- End project details panel-->
				</div>
</asp:Content>
