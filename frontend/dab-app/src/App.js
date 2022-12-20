import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import PrivateRoute from './Components/private-router';
import About from './Components/about';
import Dorms from './Components/dorms';
import Home from './Components/home';
import Recommendation from './Components/recommend';
import Profile from './Components/profile';
import DormListing from './Components/dorm-listing';
import Login from './Components/login';
import Results from './Components/recommendation-results';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />

                    {/* This route is for about component
          with exact path "/about", in component
          props we passes the imported component*/}
                    <Route path="/about" element={<About/>} />
                    {/* If any route mismatches the upper
          route endpoints then, redirect triggers
          and redirects app to home component with to="/" */}
                    <Route path="/dorms" element={<PrivateRoute><Dorms/></PrivateRoute>} />
                    <Route path="/recommend" element={<PrivateRoute><Recommendation/></PrivateRoute>} />
                    <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
                    <Route path="/dorm-listing/:id" element={<PrivateRoute><DormListing/></PrivateRoute>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="*" element={<Navigate to={"/"} replace />} />
                    <Route path="/recommendation-results" element={<Results/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;