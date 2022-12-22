
import React,{useState,useEffect} from 'react';

import Head from './head';
import Nav from './nav';
import './css/title.css';
import './css/profile.css';
import Footer from './footer';
import Scripts from './scripts';
import Reviews from './reviews';

import {onAuthStateChanged,setPersistence} from "firebase/auth";

import {signInWithGoogle, signOutWithGoogle, auth} from './Firebase';


function Profile (){
    const [loggedIn, setLoggedIn] = useState(true)
	const [revs, setRev] = useState([[]])

	let hasReview = false;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    });

		//when the page loads gets reviews for that dorm
	const getComments = async () => {
		let postParameters = {
			"email": localStorage.getItem("email")
		};

		await fetch("http://localhost:4567/getProfile", {
			method: 'post', body: JSON.stringify(postParameters),
			headers: {"Access-Control-Allow-Origin": "*"}
		}).then((responseObject) => {
			responseObject.json()
				.then((reviews) => {
					console.log(reviews);
					console.log(reviews['reviews'])
					// setComments(comments);
					setRev(reviews['reviews'])
				}).catch((error) => console.log("Error: Failed to fetch table data to be broadcast", error))
		})
	}

	useEffect(() => {
		getComments();
	}, []);

    return loggedIn ? (
		<div className="profile">
			<Head/>
			<body>
				<Nav/>
				<section className="title">
					<br/>
					<div>
						<h1>Profile</h1>
						<img src={localStorage.getItem("photo")} referrerpolicy="no-referrer" alt = "profile photo"/>
						<h3>{localStorage.getItem("name")}</h3>
					</div>
					<h4>Your Reviews</h4>
				</section>

				<div className="col-sm-15 col-md-15 centerthisbitch" >
					<Reviews reviewlst={revs}/>
				</div>

				<div class = "center">
					<button class = "button" onClick={signOutWithGoogle}>Sign out</button>
				</div>
				<Footer/>
				<Scripts/>
			</body>
		</div>
    ) : (		<div className="profile">
	<Head/>
	<body>
		<Nav/>
		<section className="title">
			<br/>
			<div>
				<h4>You have successfully signed out</h4>
			</div>
		</section>
		<Footer/>
		<Scripts/>
	</body>
</div>)
}

export default Profile;




