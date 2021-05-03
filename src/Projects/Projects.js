import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import maid1 from '../img/maid/1.png';
import maid2 from '../img/maid/2.png';
import maid3 from '../img/maid/3.png';
import maid4 from '../img/maid/4.png';
import maid5 from '../img/maid/5.png';
import maid6 from '../img/maid/11.png';

import food1 from '../img/food/1.png';
import food2 from '../img/food/2.png';
import food3 from '../img/food/3.png';
import food4 from '../img/food/4.png';

import fancy1 from '../img/fancy/1.png';
import fancy2 from '../img/fancy/2.png';
import fancy3 from '../img/fancy/3.png';

import club1 from '../img/club/1.png';
import club2 from '../img/club/2.png';
import club3 from '../img/club/3.png';
import club4 from '../img/club/4.png';
import club5 from '../img/club/5.png';

import hungry1 from '../img/hungry/1.png';
import hungry2 from '../img/hungry/2.png';
import hungry3 from '../img/hungry/3.png';

import rock1 from '../img/rock/1.png';
import rock2 from '../img/rock/2.png';
import rock3 from '../img/rock/3.png';


import MyNavbar from '../Navbar/MyNavbar';
import Footer from '../Footer/Footer';


const Projects = () => {
    return (
        <div className="bg-dark ">
            <MyNavbar></MyNavbar>
        <div className="py-3">
        <div className="container">
            <h2 className="text-center text-white p-3">My Recent Projects</h2>
            
            {/* First row */}
            
            <div className="row">
                
                <div className="col-md-6 my-5">
                   <div className="card animate__animated animate__bounceInLeft">
                         
                                 <Carousel autoPlay="true" infiniteLoop="true" className="p-3 bg-success">
                                    <div>
                                        <img src={maid1} />
                                    </div>
                                    <div>
                                        <img src={maid2} />
                                    </div>
                                    <div>
                                        <img src={maid3} />
                                    </div>
                                    <div>
                                        <img src={maid4} />
                                    </div>
                                    <div>
                                        <img src={maid5} />
                                    </div>
                                    <div>
                                        <img src={maid6} />
                                    </div>
                                </Carousel>
                            <div className="card-body">
                                <h5 className="card-title">Maid Service</h5>
                                <p className="card-text">It’s a  Complete Full Stack Project.
                                    Used React, Mongodb, Firebase, Node.js, Heroku.
                                    Special Features Added Like Seperate Role for Admin and User.Admin Dashboard and User Dashboard
                                    .</p>
                                <a target="_blank" href="https://maidservice-9ba67.web.app/" className="btn btn-primary m-2">Live Link</a>
                                <a target="_blank" href="https://github.com/hasansiam45/maid-service-client" className="btn btn-primary m-2">Code</a>
                            
                            </div>
                    </div>
                </div>
                
                <div className="col-md-6 my-5">
                    <div className="card animate__animated animate__bounceInRight">
                            
                                     <Carousel autoPlay="true" infiniteLoop="true" className="p-3 bg-success">
                                    <div>
                                        <img src={food1} />
                                    </div>
                                    <div>
                                        <img src={food2} />
                                    </div>
                                    <div>
                                        <img src={food3} />
                                    </div>
                                    <div>
                                        <img src={food4} />
                                    </div>
                                </Carousel>
                            <div className="card-body">
                                <h5 className="card-title">Food Village</h5>
                                <p className="card-text">It’s Another Full Stack Project
                                    Used React,Mongodb,Firebase,Node.js,Heroku.
                                    Special Features Added Like Admin Can Add Food to the Menu List.
                                    Used Google Authentication For User Access.</p>
                                <a target="_blank" href="https://foodvillage-f9119.web.app/" className="btn btn-primary m-2">Live Link</a>
                                <a target="_blank" href="https://github.com/Porgramming-Hero-web-course/full-stack-client-hasansiam45" className="btn btn-primary m-2">Code</a>
                            
                            </div>
                    </div>
                </div>
            
            </div>
            
            {/* second row */}
            
                   <div className="row">
                
                <div className="col-md-6 my-5">
                   <div className="card animate__animated animate__bounceInDown animate__delay-2s">
                           
                                      <Carousel autoPlay="true" infiniteLoop="true" className="p-3 bg-success">
                                    <div>
                                        <img src={fancy1} />
                                    </div>
                                    <div>
                                        <img src={fancy2} />
                                    </div>
                                    <div>
                                        <img src={fancy3} />
                                    </div>
                          
                                </Carousel>
                            <div className="card-body">
                                <h5 className="card-title">Fancy Slider</h5>
                                <p className="card-text">It's a Front end project. User can add pictures and make them slide. Let's have some fun. Technology used Html, Css, Javascript</p>
                                <a target="_blank" href="https://hasansiam45.github.io/fancy-slider/" className="btn btn-primary m-2">Live Link</a>
                                <a target="_blank" href="https://github.com/hasansiam45/fancy-slider" className="btn btn-primary m-2">Code</a>
                            
                            </div>
                    </div>
                </div>
                
                <div className="col-md-6 my-5">
                    <div className="card animate__animated animate__bounceInUp animate__delay-2s">
                              
                                     <Carousel autoPlay="true" infiniteLoop="true" className="p-3 bg-success">
                                    <div>
                                        <img src={club1} />
                                    </div>
                                    <div>
                                        <img src={club2} />
                                    </div>
                                    <div>
                                        <img src={club3} />
                                    </div>
                                    <div>
                                        <img src={club4} />
                                    </div>
                                     <div>
                                        <img src={club5} />
                                    </div>
                                </Carousel>
                            <div className="card-body">
                                <h5 className="card-title">Club Info</h5>
                                <p className="card-text">It's a react based project. Here user can find the team of English premiere league. User can see details of any team by explore button. Technology Used React, React-Router, Api, Bootstrap, React Font Awesome.</p>
                                <a target="_blank" href="https://club-info-hasansiam.netlify.app/" className="btn btn-primary m-2">Live Link</a>
                                <a target="_blank" href="https://github.com/Porgramming-Hero-web-course/simple-react-hasansiam45" className="btn btn-primary m-2">Code</a>
                            
                            </div>
                    </div>
                </div>
            
            </div>
            
            {/* third row */}
            
                   <div className="row">
                
                <div className="col-md-6 my-5">
                   <div className="card animate__animated animate__rubberBand animate__delay-4s">
                           
                                         <Carousel autoPlay="true" infiniteLoop="true" className="p-3 bg-success">
                                    <div>
                                        <img src={hungry1} />
                                    </div>
                                    <div>
                                        <img src={hungry2} />
                                    </div>
                                    <div>
                                        <img src={hungry3} />
                                    </div>
                                   
                                </Carousel>
                            <div className="card-body">
                                <h5 className="card-title">Hungry Monster</h5>
                                <p className="card-text">Here User can search food by name, if that food is available in the api then it will be shown into UI. Technology used Html, Css, Javascript,Rest Api.</p>
                                <a target="_blank" href="https://hasansiam45.github.io/hungry-monster/" className="btn btn-primary m-2">Live Link</a>
                                <a target="_blank" href="https://github.com/hasansiam45/hungry-monster" className="btn btn-primary m-2">Code</a>
                            
                            </div>
                    </div>
                </div>
                
                <div className="col-md-6 my-5">
                    <div className="card animate__animated animate__rubberBand animate__delay-4s">
                           
                                      <Carousel autoPlay="true" infiniteLoop="true" className="p-3 bg-success">
                                    <div>
                                        <img src={rock1} />
                                    </div>
                                    <div>
                                        <img src={rock2} />
                                    </div>
                                    <div>
                                        <img src={rock3} />
                                    </div>
                          
                                </Carousel>
                            <div className="card-body">
                                <h5 className="card-title">Rock It</h5>
                                <p className="card-text">Here User can search song by name, if that song is available in the api then it will be shown into UI and also can see it's lyrics which calls another Api. Technology used Html, Css, Javascript,Rest Api.</p>
                                <a target="_blank" href="https://hasansiam45.github.io/hard-rock/" className="btn btn-primary m-2">Live Link</a>
                                <a target="_blank" href="https://github.com/hasansiam45/hard-rock" className="btn btn-primary m-2">Code</a>
                            
                            </div>
                    </div>
                </div>
            
            </div>
            
            </div>
            </div>
            <Footer></Footer>
            </div>
    )
}

export default Projects
