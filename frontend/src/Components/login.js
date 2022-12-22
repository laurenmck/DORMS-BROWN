
import React, {useState} from 'react';
import {Navigate } from 'react-router-dom';
import Head from './head';
import Nav from './nav';
import './css/title.css';
import './css/profile.css';
import Footer from './footer';
import Scripts from './scripts';

import {onAuthStateChanged,setPersistence} from "firebase/auth";

import {signInWithGoogle, signOutWithGoogle, auth} from './Firebase';


function Login (){
    const [loggedIn, setLoggedIn] = useState(false)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    });

    if(loggedIn){
        return <Navigate to="/"/>;
    }

    return (
		<div className="login">
			<Head/>
			<body>
				<Nav/>
				<section className="title">
					<br/>
					<div>
						<h3>You must be signed in to view this page</h3>
					</div>
				</section>
				<div class = "center">
					<button class = "button" onClick={signInWithGoogle}>Log in</button>
				</div>
				<Footer/>
				<Scripts/>
			</body>
		</div>
    )
}

export default Login;
