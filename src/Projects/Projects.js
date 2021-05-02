import React from 'react'
import img1 from '../../src/img/3.png';
import img2 from '../../src/img/4.png';
import img3 from '../../src/img/5.png';
import img4 from '../../src/img/6.png';
import img5 from '../../src/img/7.png';
import img6 from '../../src/img/8.png';
import Footer from '../Footer/Footer';
import MyNavbar from '../Navbar/MyNavbar';

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
                        <img className="card-img-top" src={img3} alt="Card image cap"/>
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
                        <img className="card-img-top" src={img2} alt="Card image cap"/>
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
                        <img className="card-img-top" src={img1} alt="Card image cap"/>
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
                        <img className="card-img-top" src={img4} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Stopwatch</h5>
                                <p className="card-text">Its a working stopwatch which can be used. It's simple for using. Technology Used Html,Css, Javascript</p>
                                <a target="_blank" href="https://hasansiam45.github.io/fancy-stopwatch/" className="btn btn-primary m-2">Live Link</a>
                                <a target="_blank" href="https://github.com/hasansiam45/fancy-stopwatch" className="btn btn-primary m-2">Code</a>
                            
                            </div>
                    </div>
                </div>
            
            </div>
            
            {/* third row */}
            
                   <div className="row">
                
                <div className="col-md-6 my-5">
                   <div className="card animate__animated animate__rubberBand animate__delay-4s">
                        <img className="card-img-top" src={img5} alt="Card image cap"/>
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
                        <img className="card-img-top" src={img6} alt="Card image cap"/>
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
