import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Head from './head';
import Nav from './nav';
import './css/title.css'
import './css/recommendation-results.css'
import Scripts from './scripts';
import Footer from './footer';
import './css/results.css'

function Results() {

    const [recommendations, setRecommendations] = useState([])
    const dormNames = ["barbour", "caswell", "diman", "chapin", "goddard", "greg", "harkness", "hegeman",
        "hope", "littlefield", "marcy", "minden", "morris", "olney", "perkins", "sears", "slater"]
    const [rec_zero, setRecZero] = useState("")
    const [rec_one, setRecOne] = useState("")
    const [rec_two, setRecTwo] = useState("")
    let filled = false;

    const displayRecommendations = () => {
        fetch("http://localhost:4567/displayRecommendations", {
            method: 'POST',
            headers: {"Access-Control-Allow-Origin": "*"}
        })
            .then((response) => response.json())
            .then((data) => doSomething(data))
    }

    function doSomething(data) {
        if (data === null) {
            if (recommendations[0] === null) {
                recommendations.push("no recommendations 1")
            }
            if (recommendations[1] === null) {
                recommendations.push("no recommendations 2")
            }
            if (recommendations[2] === null) {
                recommendations.push("no recommendations 3")
            }
        }
        if (!filled) {
            setRecommendations(data)
        }
        filled = true;
        const dorm_zero = data[0].toLowerCase();
        if (dormNames.includes(dorm_zero)) {
            setRecZero(require('./img/outside/' + dorm_zero + '.jpg'))
        } else {
            if (dorm_zero === "grad center") {
                setRecZero((require('./img/outside/gradcenter.jpg')))
            } else if (dorm_zero === "new pembroke") {
                setRecZero((require('./img/outside/pembroke.jpg')))
            } else if (dorm_zero === "young orchard") {
                setRecZero((require('./img/outside/youngo.jpg')))
            } else {
                setRecZero((require('./img/outside/wellness.jpg')))
            }
        }
        const dorm_one = data[1].toLowerCase();
        console.log(dorm_one)
        if (dormNames.includes(dorm_one)) {
            setRecOne(require('./img/outside/' + dorm_one + '.jpg'))
        } else {
            if (dorm_one === "grad center") {
                setRecOne((require('./img/outside/gradcenter.jpg')))
            } else if (dorm_one === "new pembroke") {
                setRecOne((require('./img/outside/pembroke.jpg')))
            } else if (dorm_one === "young orchard") {
                setRecOne((require('./img/outside/youngo.jpg')))
            } else {
                setRecOne((require('./img/outside/wellness.jpg')))
            }
        }
        const dorm_two = data[2].toLowerCase();
        if (dormNames.includes(dorm_two)) {
            setRecTwo(require('./img/outside/' + dorm_two + '.jpg'))
        } else {
            if (dorm_two === "grad center") {
                setRecTwo((require('./img/outside/gradcenter.jpg')))
            } else if (dorm_two === "new pembroke") {
                setRecTwo((require('./img/outside/pembroke.jpg')))
            } else if (dorm_two === "young orchard") {
                setRecTwo((require('./img/outside/youngo.jpg')))
            } else {
                setRecTwo((require('./img/outside/wellness.jpg')))
            }
        }
    }

    return (
        <body onLoad={displayRecommendations}>
        <Head/>
        <div className="recs">
            <Nav/>
            <section className="title idk">
                <br/>
                <h1>Your Recommended Dorms</h1>
            </section>
            <div className="blog-slider">
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <img src={rec_zero} alt="no picture"/>
                        </div>
                        <div className="blog-slider__content">
                            <div className="blog-slider__title">{recommendations[0]}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-slider">
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <img src={rec_one} alt="no picture"/>
                        </div>
                        <div className="blog-slider__content">
                            <div className="blog-slider__title">{recommendations[1]}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-slider">
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <img src={rec_two} alt="no picture"/>
                        </div>
                        <div className="blog-slider__content">
                            <div className="blog-slider__title">{recommendations[2]}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Scripts/>
        </div>
        </body>

    );
}

export default Results;