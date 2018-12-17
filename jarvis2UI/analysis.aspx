<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="analysis.aspx.cs" Inherits="jarvis2UI.analysis" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
          <div class="">

            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                     <div class="col-md-12 col-sm-12 col-xs-12">
						<div class="x_panel">
						  <div class="x_title">
							<h2><i class="fa fa-support"></i> Log Analytics</h2>
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
								<a class="panel-heading" role="tab" id="headingOne1" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
								  <h4 class="panel-title">Upload File</h4>
								</a>
								<div id="collapseOne1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
								  <div class="panel-body">
									<div class="x_content">
										<div class="row">
											<div class="col-md-12 col-sm-12 col-xs-12">
											<p><i class="fa fa-info-circle"></i> Upload relevant logs (text) or images to analyse potential problems and generate a system recommendation to resolve the issue. </p>
											<br>
											</div>
											<div class="col-md-10 col-sm-12 col-xs-12">												
												<form action="#" method="post" id="analysisDropzone" class="dropzone"></form>
											</div>
											<div class="col-md-2 col-sm-12 col-xs-12" style="position:relative; top:226px">
												<button type="button" id="btnAnalyseFiles" class="btn btn-success btn-md" style="display:none">Analyse Files</button><br>
												
											</div>
										</div>
									  </div>
								  </div>
								</div>
							  </div>
							  <div class="panel">
								<a class="panel-heading collapsed" role="tab" id="headingTwo1" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo">
								  <h4 class="panel-title">Log Analysis</h4>
								</a>
								<div id="collapseTwo1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
								  <div class="panel-body">
									  <p><i class="fa fa-info-circle"></i> The Log Analysis System will provide the analysis result and recommendations to reolve the issue below.</p>
									<br>
										<form class="form-vertical">
											<div class="form-group col-md-12 col-sm-12 col-xs-12">
											  <label>Recommendation</label>
											  <textarea class="form-control" rows="5" id="processedtext" readonly="readonly" placeholder="Recommendation Text">Please remove the drive from the slot and re-insert it. It should fix the issue.</textarea>
											</div>
                                            <div class="form-group col-md-12 col-sm-12 col-xs-12">
											  <label>Recommendation Image</label>
											  <img class="form-control" src="" style="display:none" id="imgprocessedimage" />
											</div>
											<div class="form-group pull-right">
												<a href="#collapseTwo2" data-toggle="collapse" data-parent="#accordion1" class="btn btn-info btn-md">Raise Ticket</a>
											</div>
										</form>
								  </div>
								</div>
							  </div>
							  <div class="panel">
								<a class="panel-heading collapsed" role="tab" id="headingTwo1" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">
								  <h4 class="panel-title">Generate Service Request</h4>
								</a>
								<div id="collapseTwo2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
								  <div class="panel-body">
									<p><i class="fa fa-info-circle"></i> If the issue was not resolved by the recommendation though Log Analytics, you can manually raise a ticket below.</p>
										<form class="form-vertical">
											<div class="form-group col-md-12 col-sm-12 col-xs-12">
											  <label>Ticket Title</label>
											  <input type="text" id="txtanalysisTicketTitle" class="form-control">
											</div>
											<div class="form-group col-md-12 col-sm-12 col-xs-12">
											  <label>Ticket Description</label>
											  <textarea id="txtanalysisTicketDesc" class="form-control" wrap="wrap" rows="5"></textarea>
											</div>
											<button type="button" id="btnanalysisSubmitTicket" class="btn btn-success btn-md pull-right">Submit Ticket</button>
										</form>
								  </div>
								</div>
							  </div>
							</div>
							<!-- end of accordion -->


						  </div>
						</div>
					</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</asp:Content>
