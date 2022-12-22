import React, {useState} from 'react';

import Head from './head';
import Nav from './nav';
import Footer from './footer';
import Scripts from './scripts';
import RecommendationTitle from './recommend-title';
import './css/recommend.css';
import $ from 'jquery';
import registerSurveyOption from "./js/recommend.js";
import './css/btn.css';
import {ReactComponent as Button} from "./img/arrow-right.svg";

function Recommendation (){

	const [single, setSinglePreference] = useState(false);
	const [double, setDoublePreference] = useState(false);
	const [triple, setTriplePreference] = useState(false);
	const [quad, setQuadPreference] = useState(false);
	const [suite, setSuitePreference] = useState(false);
	const [location, setLocationPreference] = useState("");
	const [bathroom, setBathroomPreference] = useState("");
	const [floor, setFloorPreference] = useState("");
	const [commonRoom, setCommonRoomPreference] = useState("");
	const [elevator, setElevatorPreference] = useState("");

	// post request to send survey data to backend
	const submitSurvey = () => {
		let postParameters = {
			"singlePreference": single,
			"doublePreference": double,
			"triplePreference": triple,
			"quadPreference": quad,
			"suitePreference": suite,
			"location": location,
			"bathroom": bathroom,
			"floor": floor,
			"commonRoom": commonRoom,
			"elevator": elevator,
		};
		fetch("http://localhost:4567/submitSurvey", {
			method: 'post', body: JSON.stringify(postParameters),
			headers: {"Access-Control-Allow-Origin": "*"}
		})
	}

	return (
	<div className="recommend">
		<Head/>
		<div>
				<Nav/>
				<RecommendationTitle/>
				<form id="msform">
					<fieldset>
						<h2 className="fs-title">What are your preferred room style(s)? (Select all that apply)</h2>
						<label className="checkbox">
							<input type="checkbox" name="checkbox" className="room_style" id="Single"
								   onClick={() => setSinglePreference(current => !current)}/>
							<span>Single</span>
						</label>
						<label className="checkbox">
							<input type="checkbox" name="checkbox" className="room_style" id="Double"
								   onClick={() => setDoublePreference(current => !current)}/>
							<span>Double</span>
						</label>
						<label className="checkbox">
							<input type="checkbox" name="checkbox" className="room_style"  id="Triple"
								   onClick={() => setTriplePreference(current => !current)}/>
							<span>Triple</span>
						</label>
						<label className="checkbox">
							<input type="checkbox" name="checkbox" className="room_style"  id="Quad"
								   onClick={() => setQuadPreference(current => !current)}/>
							<span>Quad</span>
						</label>
						<label className="checkbox">
							<input type="checkbox" name="checkbox" className="room_style"  id="Suite"
								   onClick={() => setSuitePreference(current => !current)}/>
							<span>Suite</span>
						</label>
						<h2 className="fs-title">Where do you prefer to live?</h2>
						<label className="radio-label">
							<input type="radio" name="location" className="location" id="North Campus"
								   onClick={() => setLocationPreference("North Campus")}/>
							<span>North Campus</span>
						</label>
						<label className="radio-label">
							<input type="radio" name="location" className="location" id="Center Campus"
								   onClick={() => setLocationPreference("Center Campus")}/>
							<span>Center Campus</span>
						</label>
						<label className="radio-label">
							<input type="radio" name="location" className="location" id="South Campus"
								   onClick={() => setLocationPreference("South Campus")}/>
							<span>South Campus</span>
						</label>
						<h2 className="fs-title">How important is having a private bathroom?</h2>
						<label className="radio-label">
							<input type="radio" name="bathroom" className="bathroom" id="Not Important"
								   onClick={() => setBathroomPreference("Not Important")}/>
							<span>Not Important</span>
						</label>
						<label className="radio-label">
							<input type="radio" name="bathroom" className="bathroom" id="Neutral"
								   onClick={() => setBathroomPreference("Neutral")}/>
							<span>Neutral</span>
						</label>
						<label className="radio-label">
							<input type="radio" name="bathroom" className="bathroom" id="Important"
								   onClick={() => setBathroomPreference("Important")}/>
							<span>Important</span>
						</label>
						<h2 className="fs-title">What type of floor would you prefer?</h2>
						<label className="radio-label">
							<input type="radio" name="floor" className="floor" id="Hardwood"
								   onClick={() => setFloorPreference("Hardwood")}/>
							<span>Hardwood</span>
						</label>
						<label className="radio-label">
							<input type="radio" name="floor" className="floor" id="Carpeted"
								   onClick={() => setFloorPreference("Carpeted")}/>
							<span>Carpeted</span>
						</label>
						<label className="radio-label">
							<input type="radio" name="floor" className="floor" id="No Preference"
								   onClick={() => setFloorPreference("No Preference")}/>
							<span>No preference</span>
						</label>
						<h2 className="fs-title">How important is having a common room?</h2>
						<label className="radio-label">
							<input type="radio" name="commonRoom" className="commonRoom" id="Not Important"
								   onClick={() => setCommonRoomPreference("Not Important")}/>
							<span>Not important</span>
						</label>
						<label className="radio-label">
							<input type="radio" name="commonRoom" className="commonRoom" id="Neutral"
								   onClick={() => setCommonRoomPreference("Neutral")}/>
							<span>Neutral</span>
						</label>
						<label className="radio-label">
							<input type="radio" name="commonRoom" className="commonRoom" id="Important"
								   onClick={() => setCommonRoomPreference("Important")}/>
							<span>Important</span>
						</label>
						<h2 className="fs-title">How important is having an elevator?</h2>
						<label className="radio-label">
							<input type="radio" name="elevator" className="elevator" id="Not Important"
								   onClick={() => setElevatorPreference("Not Important")}/>
							<span>Not Important</span>
						</label>
						<label className="radio-label">
							<input type="radio" name="elevator" className="elevator" id="Neutral"
								   onClick={() => setElevatorPreference("Neutral")}/>
							<span>Neutral</span>
						</label>
						<label className="radio-label">
							<input type="radio" name="elevator" className="elevator" id="Important"
								   onClick={() => setElevatorPreference("Important")}/>
							<span>Important</span>
						</label>
						<br/>
						<br/>
						{/*<div className="rec-btn-container">*/}
						{/*	<a className="dorm-btn not-link" href="/recommendation-results">*/}
						{/*		Submit Form <input type="submit" value="submit form"/>*/}
						{/*	</a>*/}
						{/*</div>*/}
						<div className="rec-btn-container">
							<a className="dorm-btn not-link" onClick={submitSurvey} href="/recommendation-results" >
								Get Recommendations
							</a>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	)
}

export default Recommendation;




