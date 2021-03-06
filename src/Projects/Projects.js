import React from 'react'
import ReactDOM from 'react-dom';
import Zoom from 'react-reveal/Zoom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import resort1 from '../img/resort/Screenshot_16.png';
import resort2 from '../img/resort/Screenshot_17.png';
import resort3 from '../img/resort/Screenshot_18.png';
import resort4 from '../img/resort/Screenshot_19.png';
import resort5 from '../img/resort/Screenshot_20.png';
import resort6 from '../img/resort/Screenshot_21.png';
import resort7 from '../img/resort/Screenshot_22.png';
import resort8 from '../img/resort/Screenshot_23.png';
import resort9 from '../img/resort/Screenshot_24.png';
import resort10 from '../img/resort/Screenshot_25.png';
import resort11 from '../img/resort/Screenshot_26.png';



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

import garden1 from '../img/garden/Screenshot_6.png';
import garden2 from '../img/garden/Screenshot_7.png';
import garden3 from '../img/garden/Screenshot_8.png';
import garden4 from '../img/garden/Screenshot_9.png';
import garden5 from '../img/garden/Screenshot_10.png';



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
                   <div className="card">
                         <Zoom left>
                                 <Carousel autoPlay="true" infiniteLoop="true" className="p-3 bg-success">
                                    <div>
                                        <img src={resort1} />
                                    </div>
                                        <div>
                                        <img src={resort2} />
                                        </div>
                                           <div>
                                        <img src={resort3} />
                                        </div>
                                           <div>
                                        <img src={resort4} />
                                        </div>
                                           <div>
                                        <img src={resort5} />
                                        </div>
                                           <div>
                                        <img src={resort6} />
                                        </div>
                                           <div>
                                        <img src={resort7} />
                                        </div>
                                           <div>
                                        <img src={resort8} />
                                        </div>
                                           <div>
                                        <img src={resort9} />
                                        </div>
                                           <div>
                                        <img src={resort10} />
                                        </div>
                                           <div>
                                        <img src={resort11} />
                                    </div>
                                </Carousel>
                            <div className="card-body">
                                <h5 className="card-title">Resort BD</h5>
                                <p className="card-text">It???s a  Complete Full Stack Project.
                                    Used React, Mongodb, Firebase, Node.js, Heroku.
                                    Special Features Added Like Seperate Role for Admin and User.Admin Dashboard and User Dashboard
                                    .</p>
                                <a target="_blank" href="https://resort-bd.web.app/" className="btn btn-primary m-2">Live Link</a>
                                <a target="_blank" href="https://github.com/hasansiam45/resort-bd" className="btn btn-primary m-2">Code</a>
                            
                                </div>
                        </Zoom>
                    </div>
                </div>
                
                <div className="col-md-6 my-5">
                    <div className="card">
                            <Zoom left>
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
                                <p className="card-text">It???s Another Full Stack Project
                                    Used React,Mongodb,Firebase,Node.js,Heroku.
                                    Special Features Added Like Admin Can Add Food to the Menu List.
                                    Used Google Authentication For User Access.</p>
                                <a target="_blank" href="https://foodvillage-f9119.web.app/" className="btn btn-primary m-2">Live Link</a>
                                <a target="_blank" href="https://github.com/Porgramming-Hero-web-course/full-stack-client-hasansiam45" className="btn btn-primary m-2">Code</a>
                            
                                    </div>
                             </Zoom>
                    </div>
                </div>
            
            </div>
            
            {/* second row */}
            
                   <div className="row">
                
                <div className="col-md-6 my-5">
                   <div className="card">
                           <Zoom left>
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
                            </Zoom>
                    </div>
                </div>
                
                <div className="col-md-6 my-5">
                    <div className="card">
                              <Zoom left>
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
                            </Zoom>
                    </div>
                </div>
            
            </div>
            
            {/* third row */}
            
                   <div className="row">
                
                <div className="col-md-6 my-5">
                   <div className="card">
                           <Zoom left>
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
                            </Zoom>
                    </div>
                </div>
                
                <div className="col-md-6 my-5">
                    <div className="card">
                           <Zoom left>
                                      <Carousel autoPlay="true" infiniteLoop="true" className="p-3 bg-success">
                                    <div>
                                        <img src={garden1} />
                                    </div>
                                    <div>
                                        <img src={garden2} />
                                    </div>
                                    <div>
                                        <img src={garden3} />
                                    </div>
                                    <div>
                                        <img src={garden4} />
                                    </div>
                                    <div>
                                        <img src={garden5} />
                                    </div>

                          
                                </Carousel>
                            <div className="card-body">
                                <h5 className="card-title">Garden Go</h5>
                                <p className="card-text">Here User can order Tree Plant by online. This is a team project. I developed the redux part of this project for state management and also built a contact form for user to contact with us. </p>
                                <a target="_blank" href="https://garden-go.web.app/" className="btn btn-primary m-2">Live Link</a>
                                <a target="_blank" href="https://github.com/sajjadsadiqofficial/Hero-Garden-Go" className="btn btn-primary m-2">Code</a>
                            
                                    </div>
                             </Zoom>
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
