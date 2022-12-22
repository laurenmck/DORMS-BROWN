import React from 'react';
import './css/review.css';
import {useEffect, useState} from "react";
import { storage } from "../firebase"
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';

/**
 * class to show reviews in tht database about each dorm to the website
 * @param prop - a list of reviews for the respective dorm
 * @returns {JSX.Element} --
 * @constructor --
 */
function Reviews(prop: {reviewlst: Object[][]}) {
    console.log("big booty");

    return(
        <div className="row">
            <div className="col-sm-9 col-md-10">
                {prop.reviewlst.map((review, index) =>
                    <div className="review">
                        <div className="row">
                                <div className="col-sm-3">
                                    <div>
                                        <div className="star-rating">
                                            {[...Array(5)].map((star, index) => {
                                                index += 1;
                                                return (
                                                    <button
                                                        type="button"
                                                        key={index}
                                                        className={index <= review[2] ? "on" : "off"}
                                                    >
                                                        <span className="star">&#9733;</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                            </div>
                                <div className="col-sm-6">
                                    <h5 className="dorm">{review[0]}  </h5>
                                    <p className="rev">{review[1]} </p>
                                </div>
                            <div className={"photoSection"}>
                                <div className="col-sm-5">
                                    <img src={review[3]} alt={review[3]} width={100} />
                            </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
            )
        }

export default Reviews;



