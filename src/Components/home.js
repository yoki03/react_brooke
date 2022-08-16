import React, { Component } from 'react';
import "./styles.css";
import imgHome from "../assets/imgHome.jpg";
import { HashLink as Link } from "react-router-hash-link";

class Home extends Component{
    render() { 
        return (
            <div>
            <div class='home' id='home'>
                <div class='quote'>
                    <p>Hi, I am Brooke, a project manager</p>
                </div>
                <div class='imgs'>
                    <img src={imgHome} width="650" height="750" alt="Mask-Group"/>
                </div>
                <div class='bts'>
                    <button><b>Email Me</b></button>
                </div>
                <div class='links'>
                    <a>LinkedIN</a>
                    <a>FaceBook</a>
                    <a>Twitter</a>
                </div>
            </div>
            </div>
    );
    }
}

export default Home;