import React from "react";

import Head from './head';
import Nav from './nav';
import './css/title.css';
import Footer from './footer';
import Scripts from './scripts';
import './css/listing.css';
import './css/slideshow.css'
import './css/info.css';
import './css/review.css'
import Reviews from "./reviews";
import {useEffect, useState} from "react";

import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid';

function DormListing () {
	// retrieve id (will be right after the last backslash
	let pathArray = window.location.pathname.split('/');
	let id = pathArray[pathArray.length - 1];
	// retrieve all fields
	let [dormData, setDormData] = useState({})
	// data for general floor plan
	let [keysData, setKeysData] = useState({})
	let [valuesData, setValuesData] = useState({})
	// greg-specific floor plan
	let [gregAKeys, setGregAKeys] = useState({})
	let [gregAVals, setGregAVals] = useState({})
	let [gregBKeys, setGregBKeys] = useState({})
	let [gregBVals, setGregBVals] = useState({})
	// keeney-specific floor plan
	let [ABKeys, setABKeys] = useState({})
	let [ABVals, setABVals] = useState({})
	let [EPKeys, setEPKeys] = useState({})
	let [EPVals, setEPVals] = useState({})
	let [JMKeys, setJMKeys] = useState({})
	let [JMVals, setJMVals] = useState({})
	// youngo-specific floor plan
	let [YO2Keys, setYO2Keys] = useState({})
	let [YO2Vals, setYO2Vals] = useState({})
	let [YO4Keys, setYO4Keys] = useState({})
	let [YO4Vals, setYO4Vals] = useState({})
	let [YO10Keys, setYO10Keys] = useState({})
	let [YO10Vals, setYO10Vals] = useState({})
	// new pem-specific floor plan
	let [NP1Keys, setNP1Keys] = useState({})
	let [NP1Vals, setNP1Vals] = useState({})
	let [NP2Keys, setNP2Keys] = useState({})
	let [NP2Vals, setNP2Vals] = useState({})
	let [NP3Keys, setNP3Keys] = useState({})
	let [NP3Vals, setNP3Vals] = useState({})
	let [NP4Keys, setNP4Keys] = useState({})
	let [NP4Vals, setNP4Vals] = useState({})
	// grad-specific floor plan
	let [gradAKeys, setGradAKeys] = useState({})
	let [gradAVals, setGradAVals] = useState({})
	let [gradBKeys, setGradBKeys] = useState({})
	let [gradBVals, setGradBVals] = useState({})
	let [gradCKeys, setGradCKeys] = useState({})
	let [gradCVals, setGradCVals] = useState({})
	let [gradDKeys, setGradDKeys] = useState({})
	let [gradDVals, setGradDVals] = useState({})

	const fetchData = async () => {
		let data = await (await fetch(`http://localhost:4567/dorms/${id}`)).json()
		setDormData(data)
		if (data.name === "Greg") {
			let keysA = await (Object.keys(data.floorA))
			setGregAKeys(keysA)
			let valuesA = await (Object.values(data.floorA))
			setGregAVals(valuesA)
			let keysB = await (Object.keys(data.floorB))
			setGregBKeys(keysB)
			let valuesB = await (Object.values(data.floorB))
			setGregBVals(valuesB)
		} else if (data.name === "Keeney") {
			let keysA = await (Object.keys(data.floorA))
			setABKeys(keysA)
			let valuesA = await (Object.values(data.floorA))
			setABVals(valuesA)
			let keysB = await (Object.keys(data.floorB))
			setEPKeys(keysB)
			let valuesB = await (Object.values(data.floorB))
			setEPVals(valuesB)
			let keysC = await (Object.keys(data.floorC))
			setJMKeys(keysC)
			let valuesC = await (Object.values(data.floorC))
			setJMVals(valuesC)
		} else if (data.name === "New Pembroke") {
			let keysA = await (Object.keys(data.floorA))
			setNP1Keys(keysA)
			let valuesA = await (Object.values(data.floorA))
			setNP1Vals(valuesA)
			let keysB = await (Object.keys(data.floorB))
			setNP2Keys(keysB)
			let valuesB = await (Object.values(data.floorB))
			setNP2Vals(valuesB)
			let keysC = await (Object.keys(data.floorC))
			setNP3Keys(keysC)
			let valuesC = await (Object.values(data.floorC))
			setNP3Vals(valuesC)
			let keysD = await (Object.keys(data.floorD))
			setNP4Keys(keysD)
			let valuesD = await (Object.values(data.floorD))
			setNP4Vals(valuesD)
		} else if (data.name === "Grad Center") {
			let keysA = await (Object.keys(data.floorA))
			setGradAKeys(keysA)
			let valuesA = await (Object.values(data.floorA))
			setGradAVals(valuesA)
			let keysB = await (Object.keys(data.floorB))
			setGradBKeys(keysB)
			let valuesB = await (Object.values(data.floorB))
			setGradBVals(valuesB)
			let keysC = await (Object.keys(data.floorC))
			setGradCKeys(keysC)
			let valuesC = await (Object.values(data.floorC))
			setGradCVals(valuesC)
			let keysD = await (Object.keys(data.floorD))
			setGradDKeys(keysD)
			let valuesD = await (Object.values(data.floorD))
			setGradDVals(valuesD)
		} else if (data.name === "Young Orchard") {
			let keysA = await (Object.keys(data.floorA))
			setYO2Keys(keysA)
			let valuesA = await (Object.values(data.floorA))
			setYO2Vals(valuesA)
			let keysB = await (Object.keys(data.floorB))
			setYO4Keys(keysB)
			let valuesB = await (Object.values(data.floorB))
			setYO4Vals(valuesB)
			let keysC = await (Object.keys(data.floorC))
			setYO10Keys(keysC)
			let valuesC = await (Object.values(data.floorC))
			setYO10Vals(valuesC)
		} else { // general floor plan
			let keys = await (Object.keys(data.floors))
			setKeysData(keys)
			let values = await (Object.values(data.floors))
			setValuesData(values)
		}
	}

	// .images is an integer representing the number of photos we have
	// generates the html elements for all images, to be inserted in html
	const length = dormData.images;
	const images = [];
	for (let i = 1; i < length + 1; i++) {
		const dir = require(`./img/inside/${id}/${i}.jpg`);
		images.push(<article><img src={dir}/></article>);
	}

	// generates the html elements for all image inputs, to be inserted in html
	const btns = [];
	for (let i = 2; i < length + 1; i++) {
		let id = `slide${i}`;
		btns.push(<input type="radio" name="slider" id={id}/>);
	}

	// generates the html elements for all dots for the image slideshow, to be inserted in html
	const dots = [];
	for (let i = 1; i < length + 1; i++) {
		let id = `slide${i}`;
		dots.push(<label htmlFor={id}/>)
	}

	useEffect(() => {
		console.log("1st use effect", dormData.name)
		fetchData()
	}, [])

	//TODO: FIGURE THIS PART OUT: THE TIME OUT IS WEIRD AND IM NOT SURE THE DORMDATA.NAME IS CORRECT -- IT TROWS ERRORS SOMETIMES/MAKES REQUESTS WHEN I DONT WANT IT TOO!!!
	//makes sure getComments is only called once upon page loading, wait it to make sure the dorm.name var is defined
	useEffect(() => {
		if(dormData.name) {
			getComments()
		}
	}, [dormData])

	console.log(dormData.name)

	//state variable for the page reviews - updated when user submits a new review
	const [revs, setRev] = useState([[]]); //state variable for the page reviews - updated when user submits a new review

	//state variables for user input form
	const [image, setImage] = useState(null);
	const [displayimg, setdisplayimg] = useState(null);
	const [rating, setRating] = useState(0);
	const [review, setRec] = useState("");
	const [hover, setHover] = useState(0); //hover used for star variable

	//when the page loads gets reviews for that dorm
	const getComments = async () => {
		console.log("in get comments", dormData.name)
		let postParameters = {
			"dormName": dormData.name
		};

		await fetch("http://localhost:4567/getReview", {
			method: 'post', body: JSON.stringify(postParameters),
			headers: {"Access-Control-Allow-Origin": "*"}
		}).then((responseObject) => {
			responseObject.json()
				.then((reviews) => {
					console.log(reviews);
					console.log(reviews['reviews'])
					// setComments(comments);
					setRev(reviews['reviews'])
				}).catch((error: any) => console.log("Error: Failed to fetch table data to be broadcast", error))
		})
	}

	//post request to add new review to the database
	const updateReviews = async () => {
		console.log("in update reviews");
		console.log("dorm name", dormData.name)
		console.log("rating", rating)
		console.log("image", image)

		const textarea = document.getElementById('mytextArea');
		const dormdropdown = document.getElementById('dorm-name-dropdown')
		var dorm = dormdropdown.options[dormdropdown.selectedIndex].text;

		const dormRev = textarea.value;
		const rat = rating;

		if(dorm === "Choose your Dorm" | rat === 0 | dormRev === "") {
			alert("review NOT added, please make sure a dorm name is choosen and both the rating and review" +
				" fields are filled out")
		} else if (displayimg != null){
			console.log(image)
			var imageRef = await ref(storage, `images/${image.value + v4()}`);
			const upload = uploadBytes(imageRef, image).then(() => {
				getDownloadURL(imageRef).then(function(url){
					console.log("url", url)
					setdisplayimg("")

					//make a method -- can't be called in here if image is not being uploaded
					let postParameters = {
						"dormName": dorm,
						"rating": rat,
						"review": dormRev,
						"image": url,
						"email": localStorage.getItem("email"),
						// image
					};
					console.log("email", localStorage.getItem("email"))

					//reset inner HTML of text area after form is submitted
					textarea.value = ""

					if (rating === 0 || review === "") {
						console.log("error")
					} else {
						fetch("http://localhost:4567/addReview", {
							method: 'post', body: JSON.stringify(postParameters),
							headers: {"Access-Control-Allow-Origin": "*"}
						}).then(response => {
							response.json()
								.then((reviews) => {
									console.log(reviews);
									// setComments(comments);
									setRev(reviews['updatedReviews'])
									alert("review added")
								})
								.catch((error: any) => console.log("Error: Failed to fetch table data to be broadcast", error))
						})
					}
				})
			}) } else {
					//make a method -- can't be called in here if image is not being uploaded
					let postParameters = {
						"dormName": dorm,
						"rating": rat,
						"review": dormRev,
						"image": "",
						"email": localStorage.getItem("email"),
						// image
					};

					console.log("email", localStorage.getItem("email"))


			//reset inner HTML of text area after form is submitted
					textarea.value = ""

					if (rating === 0 || review === "") {
						console.log("error")
					} else {
						fetch("http://localhost:4567/addReview", {
							method: 'post', body: JSON.stringify(postParameters),
							headers: {"Access-Control-Allow-Origin": "*"}
						}).then(response => {
							response.json()
								.then((reviews) => {
									console.log(reviews);
									// setComments(comments);
									setRev(reviews['updatedReviews'])
									alert("review added")
								})
								.catch((error: any) => console.log("Error: Failed to fetch table data to be broadcast", error))
						})
					}
				}
	}

	// funciton to show updated image to the screen when user uploads it
	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			setdisplayimg(URL.createObjectURL(event.target.files[0]));
			console.log("display image thing", displayimg);
		}
	}

	// depending on if the current dorm has multiple buildings, these generate the html elements for all floorplans,
	// to be inserted in html
	const allFloors = [];
	if (dormData.name === "Greg") {
		const gregA = [];
		const gregB = [];
		const gregKeys = [gregAKeys, gregBKeys]
		const gregVals = [gregAVals, gregBVals]
		const toPush = [gregA, gregB]
		for (let i = 0; i < gregKeys.length; i++) {
			for (let j = 0; j < gregKeys[i].length; j++) {
				let key = gregKeys[i][j]
				let val = gregVals[i][j]
				toPush[i].push(<li><a onClick={()=> window.open(`${val}`, "_blank")}>Floor {key}</a></li>)
			}
			if (i === 0) {
				allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{"GregA Floor Plan"}</h4></label>);
			} else {
				allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{"GregB Floor Plan"}</h4></label>);
			}
			allFloors.push(<input type="checkbox" id={`touch${i+1}`}/>)
			allFloors.push(<ul className="slide floorplan">{toPush[i]}</ul>)
		}
	} else if (dormData.name === "Keeney") {
		const AB = [];
		const EP = [];
		const JM = [];
		const keeneyKeys = [ABKeys, EPKeys, JMKeys]
		const keeneyVals = [ABVals, EPVals, JMVals]
		const toPush = [AB, EP, JM]
		for (let i = 0; i < keeneyKeys.length; i++) {
			for (let j = 0; j < keeneyKeys[i].length; j++) {
				let key = keeneyKeys[i][j]
				let val = keeneyVals[i][j]
				toPush[i].push(<li><a onClick={()=> window.open(`${val}`, "_blank")}>Floor {key}</a></li>)
			}
			if (i === 0) {
				allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{"Archibald-Bronson Floor Plan"}</h4></label>);
			} else if (i === 1) {
				allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{"Everett-Poland Floor Plan"}</h4></label>);
			} else {
				allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{"Jameson-Mead Floor Plan"}</h4>
				</label>);
			}
			allFloors.push(<input type="checkbox" id={`touch${i+1}`}/>)
			allFloors.push(<ul className="slide floorplan">{toPush[i]}</ul>)
		}
	} else if (dormData.name === "New Pembroke") {
		const NP1 = [];
		const NP2 = [];
		const NP3 = [];
		const NP4 = [];
		const NPKeys = [NP1Keys, NP2Keys, NP3Keys, NP4Keys]
		const NPVals = [NP1Vals, NP2Vals, NP3Vals, NP4Vals]
		const toPush = [NP1, NP2, NP3, NP4]
		for (let i = 0; i < NPKeys.length; i++) {
			for (let j = 0; j < NPKeys[i].length; j++) {
				let key = NPKeys[i][j]
				let val = NPVals[i][j]
				toPush[i].push(<li><a onClick={()=> window.open(`${val}`, "_blank")}>Floor {key}</a></li>)
			}
			allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{`NewPem${i+1} Floor Plan`}</h4></label>);
			allFloors.push(<input type="checkbox" id={`touch${i+1}`}/>)
			allFloors.push(<ul className="slide floorplan">{toPush[i]}</ul>)
		}
	} else if (dormData.name === "Grad Center") {
		const GCA = [];
		const GCB = [];
		const GCC = [];
		const GCD = [];
		const gradKeys = [gradAKeys, gradBKeys, gradCKeys, gradDKeys]
		const gradVals = [gradAVals, gradBVals, gradCVals, gradDVals]
		const toPush = [GCA, GCB, GCC, GCD]
		for (let i = 0; i < gradKeys.length; i++) {
			for (let j = 0; j < gradKeys[i].length; j++) {
				let key = gradKeys[i][j]
				let val = gradVals[i][j]
				toPush[i].push(<li><a onClick={()=> window.open(`${val}`, "_blank")}>Floor {key}</a></li>)
			}
			if (i === 0) {
				allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{"GradA Floor Plan"}</h4></label>);
			} else if (i === 1) {
				allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{"GradB Floor Plan"}</h4></label>);
			} else if (i === 2) {
				allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{"GradC Floor Plan"}</h4></label>);
			} else {
				allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{"GradD Floor Plan"}</h4></label>);
			}
			allFloors.push(<input type="checkbox" id={`touch${i+1}`}/>)
			allFloors.push(<ul className="slide floorplan">{toPush[i]}</ul>)
		}
	} else if (dormData.name === "Young Orchard") {
		const YO2 = [];
		const YO4 = [];
		const YO10 = [];
		const YOKeys = [YO2Keys, YO4Keys, YO10Keys]
		const YOVals = [YO2Vals, YO4Vals, YO10Vals]
		const toPush = [YO2, YO4, YO10]
		for (let i = 0; i < YOKeys.length; i++) {
			for (let j = 0; j < YOKeys[i].length; j++) {
				let key = YOKeys[i][j]
				let val = YOVals[i][j]
				toPush[i].push(<li><a onClick={()=> window.open(`${val}`, "_blank")}>Floor {key}</a></li>)
			}
			if (i === 0) {
				allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{"Young0 #2 Floor Plan"}</h4></label>);
			} else if (i === 1) {
				allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{"Young0 #4 Floor Plan"}</h4></label>);
			} else {
				allFloors.push(<label htmlFor={`touch${i+1}`}><h4 className="floor">{"Young0 #10 Floor Plan"}</h4></label>);
			}
			allFloors.push(<input type="checkbox" id={`touch${i+1}`}/>)
			allFloors.push(<ul className="slide floorplan">{toPush[i]}</ul>)
		}
	} else { // regular case
		const floors = []
		for (let i = 0; i < keysData.length; i++) {
			let key = keysData[i]
			let val = valuesData[i]
			floors.push(<li><a onClick={()=> window.open(`${val}`, "_blank")}>Floor {key}</a></li>)
		}
		allFloors.push(<label htmlFor="touch1"><h4 className="floor">Floor Plan</h4></label>);
		allFloors.push(<input type="checkbox" id="touch1"/>)
		allFloors.push(<ul className="slide floorplan">{floors}</ul>)
	}

	return (
		<div className="dorm">
			<Head/>
			<body>
			<Nav/>
			<section className="title">
				<br/>
				<div>
					<h1>{dormData.name}</h1>
				</div>
			</section>
			
			<div className="wrapper">
				<input defaultChecked type="radio" name="slider" id="slide1"/>
				{btns}
				<div className="slider-wrapper">
					<div className="inner">
						{images}
					</div>
				</div>
				<div className="slider-prev-next-control">
					{dots}
				</div>
				<div className="slider-dot-control">
					{dots}
				</div>
			</div>


			<div className="properties-details">
				<div className="properties-info">
					<p>{dormData.description}</p>

					<h4>Features</h4>
					<ul className="columns" data-columns="2">
						<li><strong>Bathrooms: </strong>{dormData.bathroom}</li>
						<li><strong>Kitchen: </strong>{dormData.kitchen}</li>
						<li><strong>Carpet: </strong>{dormData.carpet ? "carpeted" : "hardwood/tiled"}</li>
						<li><strong>Private Common Room: </strong>{dormData.common_room ? "yes" : "no"}</li>
						<li><strong>Elevator: </strong>{dormData.elevator ? "yes" : "no"}</li>
						<li><strong>Location: </strong>{dormData.location}</li>
						<li><strong>Type of Rooms: </strong>{dormData.room?.join(", ")}</li>
					</ul>

					<h4>Map</h4>
					<iframe
						src={dormData.map}
						width="100%"
						height={450}
						frameBorder={0}
						style={{border: 0}}
						allowFullScreen=""
					/>

					{/*Show reviews for dorm.name*/}
					{allFloors}

					{/*Component to prompt a user to add a new review */}
					<h4>Add your Review </h4>
					<form className="add-review">
						<div className="row">
							<div className="col-sm-9 col-md-10">
								<div className="review">
									<div className="row">
										<div className="col-sm-3">
											<br></br>
											<label>{"Select Rating"}</label>
											<div className="star-rating">
												{[...Array(5)].map((star, index) => {
													index += 1;
													return (
														<button
															type="button"
															key={index}
															className={index <= (hover || rating) ? "on" : "off"}
															onClick={() => setRating(index)}
															onMouseEnter={() => setHover(index)}
															onMouseLeave={() => setHover(rating)}
														>
															<span className="star">&#9733;</span>
														</button>
													);
												})}
											</div>
											<br></br>
											<div className="form-input">
												<label htmlFor="file" id="select">Upload an Image</label>
												{/*<input type="file" id="file" accept="image/*" onChange={onImageChange} className="filetype" />*/}
												<input type="file" id="file" accept="image/*" onChange={(event) => {
													setImage(event.target.files[0]);
													onImageChange(event);
												}} className="filetype" />

												<img src={displayimg} alt="" width={100} required="required"/>

											</div>
										</div>
										<div className="col-sm-9">
											<h5 className="dorm">
												<select placeholder="Choose one..." className="form-control" id={"dorm-name-dropdown"} required="required">
													<option value="" disabled selected>Choose your Dorm</option>
													<option value="Morris">Morris</option>
													<option value="Champlin">Champlin</option>
													<option value="Emery">Emery</option>
													<option value="Woolley">Woolley</option>
													<option value="Andrews">Andrews</option>
													<option value="Metcalf">Metcalf</option>
													<option value="Miller">Miller</option>
													<option value="Wellness">Wellness</option>
													<option value="Slater">Slater</option>
													<option value="Hope">Hope</option>
													<option value="Hegeman">Hegeman</option>
													<option value="Littlefield">Littlefield</option>
													<option value="Barbour">Barbour</option>
													<option value="Wayland House">Wayland House</option>
													<option value="Minden">Minden</option>
													<option value="Goddard">Goddard</option>
													<option value="Buxton">Buxton</option>
													<option value="Olney">Olney</option>
													<option value="Harkness">Harkness</option>
													<option value="Chapin">Chapin</option>
													<option value="Diman">Diman</option>
													<option value="Sears">Sears</option>
													<option value="Marcy">Marcy</option>
													<option value="Caswell">Caswell</option>
													<option value="Greg">Greg</option>
													<option value="Keeney">Keeney</option>
													<option value="Grad Center">Grad Center</option>
													<option value="New Pembroke">New Pembroke</option>
													<option value="Young Orchard">Young Orchard</option>
													<option value="Perkins">Perkins</option>
												</select>
											</h5>
											<p className="rev">
												<textarea id="mytextArea" placeholder="Give us your honest thoughts! How was
											your experience and what would you warn future brown?
											 students about" onChange={setRec} required="required"></textarea>
											</p>
											<a className="review-sub" href="#" onClick={updateReviews}>Submit Review</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
					<h4>Reviews</h4>
					<Reviews reviewlst={revs}/>
					{/* <nav className="text-center" aria-label="Page navigation">
						<ul className="pagination">
							<li className="page"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
							<li className="page"><a href="#">1</a></li>
							<li className="page"><a href="#">2</a></li>
							<li className="page"><a href="#">3</a></li>
							<li className="page"><a href="#">4</a></li>
							<li className="page"><a href="#">5</a></li>
							<li className="page"><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
						</ul>
					</nav> */}
				</div>
			</div>
			<Footer/>
			<Scripts/>
			</body>
		</div>
	)
}

export default DormListing;





