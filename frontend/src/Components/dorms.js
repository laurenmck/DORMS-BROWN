import React from 'react';

import './css/dorms.css'
import Head from './head';
import Nav from './nav';
import DormsTitle from './dorms-title';
import Footer from './footer';
import Scripts from './scripts';
import filterDorms from "./js/filter";

//images for dorm page
import andrews from "./img/outside/andrews.jpg";
import barbour from "./img/outside/barbour.jpg";
import caswell from "./img/outside/caswell.jpg";
import champlin from "./img/outside/champlin.jpg";
import diman from "./img/outside/diman.jpg";
import chapin from "./img/outside/chapin.jpg";
import goddard from "./img/outside/goddard.jpg";
import gradCenter from "./img/outside/gradcenter.jpg";
import greg from "./img/outside/greg.jpg";
import hark from "./img/outside/harkness.jpg";
import heg from "./img/outside/hegeman.jpg";
import hope from "./img/outside/hope.jpg";
import keeney from "./img/outside/keeney.jpg";
import little from "./img/outside/littlefield.jpg";
import marcy from "./img/outside/marcy.jpg";
import met from "./img/outside/metcalf.jpg";
import miller from "./img/outside/miller.jpg";
import minden from "./img/outside/minden.jpg";
import morris from "./img/outside/morris.jpg";
import olney from "./img/outside/olney.jpg";
import pem from "./img/outside/pembroke.jpg";
import perk from "./img/outside/perkins.jpg";
import sears from "./img/outside/sears.jpg";
import slater from "./img/outside/slater.jpg";
import well from "./img/outside/wellness.jpg";
import emery from "./img/outside/emery.jpg";
import woolley from "./img/outside/woolley.jpg";
import buxton from "./img/outside/buxton.jpg";
import wayland from"./img/outside/waylandHouse.jpg";
import youngo from "./img/outside/youngo.jpg";

function Dorms (){

	return (
		<div className="about">
			<Head/>
			<body>
			<Nav/>
			<DormsTitle/>
			<div className="listing-area pt-120 pb-120">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="row">
								<div className="col-12">
									<div className="small-section-tittle2 mb-45">
										<h4>Advanced Filter</h4>
									</div>
								</div>
							</div>
							<div className="category-listing">
								<aside>
									{/* Room Types */}
									<div id="room">
										<h3>Room Type</h3>
										<div className="box">
											<input id="singles" name="singles" className="room" type="checkbox"
												   onClick={() => filterDorms()}/>
											<span className="check"/>
											<label htmlFor="singles">Singles</label>
										</div>
										<div className="box">
											<input id="doubles" name="doubles" className="room" type="checkbox"
												   onClick={() => filterDorms()}/>
											<span className="check"/>
											<label htmlFor="doubles">Doubles</label>
										</div>
										<div className="box">
											<input id="triples" name="triples" className="room" type="checkbox"
												   onClick={() => filterDorms()}/>
											<span className="check"/>
											<label htmlFor="triples">Triples</label>
										</div>
										<div className="box">
											<input id="quads" name="quads" className="room" type="checkbox"
												   onClick={() => filterDorms()}/>
											<span className="check"/>
											<label htmlFor="quads">Quads</label>
										</div>
										<div className="box">
											<input id="suite" name="suite" className="room" type="checkbox"
												   onClick={() => filterDorms()}/>
											<span className="check"/>
											<label htmlFor="suite">Suites</label>
										</div>
									</div>
									{/* Location */}
									<div id="location">
										<h3>Location</h3>
										<div className="box">
											<input id="north campus" name="north" className="location" type="checkbox"
												   onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="north campus">North Campus</label>
										</div>
										<div className="box">
											<input id="center campus" name="center" className="location" type="checkbox"
												   onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="center campus">Center Campus</label>
										</div>
										<div className="box">
											<input id="south campus" name="south" className="location" type="checkbox"
												   onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="south campus">South Campus</label>
										</div>
									</div>
									{/* Bathroom */}
									<div id="bathroom">
										<h3>Bathroom</h3>
										<div className="box">
											<input id="privateBathroom" name="privateBathroom" className="bathroom"
												   type="checkbox" onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="privateBathroom">Private</label>
										</div>
										<div className="box">
											<input id="semiprivateBathroom" name="semiprivateBathroom" className="bathroom"
												   type="checkbox" onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="semiprivateBathroom">Semi Private</label>
										</div>
										<div className="box">
											<input id="communalBathroom" name="communalBathroom" className="bathroom"
												   type="checkbox" onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="communalBathroom">Communal</label>
										</div>
									</div>
									{/* Kitchen */}
									<div id="kitchen">
										<h3>Kitchen</h3>
										<div className="box">
											<input id="privateKitchen" name="privateKitchen" className="kitchen"
												   type="checkbox" onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="privateKitchen">Private</label>
										</div>
										<div className="box">
											<input id="communalKitchen" name="communalKitchen" className="kitchen"
												   type="checkbox" onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="communalKitchen">Communal</label>
										</div>
									</div>
									{/* Housing Year */}
									<div id="year">
										<h3>Year</h3>
										<div className="box">
											<input id="freshman housing" name="freshman housing" className="year" type="checkbox"
												   onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="freshman housing">Freshman</label>
										</div>
										<div className="box">
											<input id="upperclassman housing" name="upperclassman housing" className="year" type="checkbox"
												   onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="upperclassman housing">Upperclassman</label>
										</div>
									</div>
									{/* Other */}
									<div id="other">
										<h3>Other</h3>
										<div className="box">
											<input id="hasElevator" name="hasElevator" className="elevator" type="checkbox"
												   onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="hasElevator">Elevator</label>
										</div>
										<div className="box">
											<input id="hasCarpet" name="hasCarpet" className="carpet" type="checkbox"
												   onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="hasCarpet">Carpet</label>
										</div>
										<div className="box">
											<input id="hasCommonRoom" name="hasCommonRoom" className="common_room"
												   type="checkbox" onClick={() => filterDorms()}/>
											<span className="check"></span>
											<label htmlFor="hasCommonRoom">Common Room</label>
										</div>
									</div>
								</aside>
								<br/>
							</div>
						</div>
						<div class="col-xl-8 col-lg-8 col-md-6">
							<span class="space"></span>
							<div class="listing-details-area">
								<div class="container">
									<div id="dorms" class="row">
										<div id="Morris" class="col-lg-6 ">
											<div class="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/1"><img src={morris} alt=""/></a>
												</div>
												<div class="list-caption">
													<span><a href="/dorm-listing/1">Open</a></span>
													<h3><a href="/dorm-listing/1">Morris Hall</a></h3>
													<p>Freshman Housing</p>
													<div class="list-footer">
														<ul>
															<li>North Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Champlin" className="col-lg-6 ">
											<div class="single-listing mb-30">
												<div class="list-img">
													<a href="/dorm-listing/2"><img src={champlin} alt=""/></a>
												</div>
												<div class="list-caption">
													<span><a href="/dorm-listing/2">Open</a></span>
													<h3><a href="/dorm-listing/2">Champlin</a></h3>
													<p>Freshman Housing</p>
													<div class="list-footer">
														<ul>
															<li>North Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Emery" className="col-lg-6 ">
											<div class="single-listing mb-30">
												<div class="list-img">
													<a href="/dorm-listing/3"><img src={emery} alt=""/></a>
												</div>
												<div class="list-caption">
													<span><a href="/dorm-listing/3">Open</a></span>
													<h3><a href="/dorm-listing/3">Emery</a></h3>
													<p>Freshman Housing</p>
													<div class="list-footer">
														<ul>
															<li>North Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Woolley" className="col-lg-6 ">
											<div class="single-listing mb-30">
												<div class="list-img">
													<a href="/dorm-listing/4"><img src={woolley} alt=""/></a>
												</div>
												<div class="list-caption">
													<span><a href="/dorm-listing/4">Open</a></span>
													<h3><a href="/dorm-listing/4">Woolley Hall</a></h3>
													<p>Freshman Housing</p>
													<div class="list-footer">
														<ul>
															<li>North Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Andrews" className="col-lg-6 ">
											<div class="single-listing mb-30">
												<div class="list-img">
													<a href="/dorm-listing/5"><img src={andrews} alt=""/></a>
												</div>
												<div class="list-caption">
													<span><a href="/dorm-listing/5">Open</a></span>
													<h3><a href="/dorm-listing/5">Andrews Hall</a></h3>
													<p>Freshman Housing</p>
													<div class="list-footer">
														<ul>
															<li>North Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Metcalf" className="col-lg-6 ">
											<div class="single-listing mb-30">
												<div class="list-img">
													<a href="/dorm-listing/6"><img src={met} alt=""/></a>
												</div>
												<div class="list-caption">
													<span><a href="/dorm-listing/6">Open</a></span>
													<h3><a href="/dorm-listing/6">Metcalf</a></h3>
													<p>Freshman Housing</p>
													<div class="list-footer">
														<ul>
															<li>North Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Miller" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/7"><img src={miller} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/7">Open</a></span>
													<h3><a href="/dorm-listing/7">Miller Hall</a></h3>
													<p>Freshman Housing</p>
													<div className="list-footer">
														<ul>
															<li>North Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Wellness" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/8"><img src={well} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/8">Open</a></span>
													<h3><a href="/dorm-listing/8">Wellness</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>North Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Slater" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/9"><img src={slater} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/9">Open</a></span>
													<h3><a href="/dorm-listing/9">Slater Hall</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>Main Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Hope" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/10"><img src={hope} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/10">Open</a></span>
													<h3><a href="/dorm-listing/10">Hope College</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>Main Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Hegeman" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/11"><img src={heg} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/11">Open</a></span>
													<h3><a href="/dorm-listing/11">Hegeman Hall</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>Main Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Littlefield" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/12"><img src={little} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/12">Open</a></span>
													<h3><a href="/dorm-listing/12">Littlefield Hall</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>Main Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Barbour" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/13"><img src={barbour} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/13">Open</a></span>
													<h3><a href="/dorm-listing/13">Barbour Hall</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Wayland" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/14"><img src={wayland} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/14">Open</a></span>
													<h3><a href="/dorm-listing/14">Wayland House</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Minden" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/15"><img src={minden} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/15">Open</a></span>
													<h3><a href="/dorm-listing/15">Minden Hall</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>Main Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Goddard" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/16"><img src={goddard} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/16">Open</a></span>
													<h3><a href="/dorm-listing/16">Goddard House</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Buxton" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/17"><img src={buxton} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/17">Open</a></span>
													<h3><a href="/dorm-listing/17">Buxton House</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Olney" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/18"><img src={olney} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/18">Open</a></span>
													<h3><a href="/dorm-listing/18">Olney House</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Harkness" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/19"><img src={hark} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/19">Open</a></span>
													<h3><a href="/dorm-listing/19">Harkness House</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Chapin" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/20"><img src={chapin} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/20">Open</a></span>
													<h3><a href="/dorm-listing/20">Chapin House</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Diman" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/21"><img src={diman} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/21">Open</a></span>
													<h3><a href="/dorm-listing/21">Diman House</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Sears" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/22"><img src={sears} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/22">Open</a></span>
													<h3><a href="/dorm-listing/22">Sears House</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Marcy" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/23"><img src={marcy} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/23">Open</a></span>
													<h3><a href="/dorm-listing/23">Marcy House</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Caswell" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/24"><img src={caswell} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/24">Open</a></span>
													<h3><a href="/dorm-listing/24">Caswell Hall</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>Main Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Greg" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/25"><img src={greg} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/25">Open</a></span>
													<h3><a href="/dorm-listing/25">Greg</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Keeney" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/26"><img src={keeney} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/26">Open</a></span>
													<h3><a href="/dorm-listing/26">Keeney Quad</a></h3>
													<p>Freshman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Grad" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/27"><img src={gradCenter} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/27">Open</a></span>
													<h3><a href="/dorm-listing/27">Grad Center</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Pembroke" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/28"><img src={pem} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/28">Open</a></span>
													<h3><a href="/dorm-listing/28">New Pembroke</a></h3>
													<p>Freshman & Upper Housing</p>
													<div className="list-footer">
														<ul>
															<li>North Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Young Orchard" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/29"><img src={youngo} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/29">Open</a></span>
													<h3><a href="/dorm-listing/29">Young Orchard</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div id="Perkins" className="col-lg-6 ">
											<div className="single-listing mb-30">
												<div className="list-img">
													<a href="/dorm-listing/30"><img src={perk} alt=""/></a>
												</div>
												<div className="list-caption">
													<span><a href="/dorm-listing/30">Open</a></span>
													<h3><a href="/dorm-listing/30">Perkins Hall</a></h3>
													<p>Upperclassman Housing</p>
													<div className="list-footer">
														<ul>
															<li>South Campus</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
			<Scripts/>
			</body>
		</div>
	)
}

export default Dorms;