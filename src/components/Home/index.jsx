import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import im from './hong.png';

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    
                    <p>I am Hong Gao</p>
                    <p>Developer, Data Engineer, and Designer</p>
                </h1>
                <Link to="about">
                    <button class="">More Info</button>
                </Link>
            </div>
            <div className="person">
                <img 
                    src={im} 
                    alt="picture of Hong Gao"
                />
            </div>
        </div>
    );
    };

        

export default Home;