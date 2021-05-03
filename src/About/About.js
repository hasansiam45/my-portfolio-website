import React from 'react';
import myImg from '../img/2.png';
import ParticlesBg from 'particles-bg';
import MyNavbar from '../Navbar/MyNavbar';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    return (
     
            <div className="bg-dark text-white">
           
                   <MyNavbar></MyNavbar>
                    <div className="container">
                    <h2 className="text-center p-4">About Me</h2>
                    
                        <div className="row mb-5">
                            <div className="col-md-8 d-flex align-items-center pt-3 animate__animated animate__lightSpeedInLeft">
                                <p>Hello, there! I am Jahid Hasan Siam. I am a full Stack Web Developer. I am expert in building User Interfaces Using Frontend Tools. Like React, Bootstrap, Material UI etc. I can also make static sites with Html and Css and also can make it dynamic with Raw js. I love to work with new technologies and i always explore to learn new things. I have also used Node.js, Express.js, Firebase, Mongodb and also familiar with React Native, Redux, Next.js</p>
                            </div>
                            <div className="col-md-4 py-2 text-center">
                            <img style={{height: '380px', width: '400px',borderBottomLeftRadius: '-15%',borderTopRightRadius: '-15%', borderTopLeftRadius: '35%', borderBottomRightRadius: '35%'}} className="py-3 animate__animated animate__lightSpeedInRight" src={myImg} alt=""/>
                            </div>
                    </div>
                    
                    
                    <h3 className="text-center mb-5">My Skills</h3>
                    <div className="row">
                    <div className="col-md-4 my-3">
                      
                       <div className="card">
                            
                            <div className="card-body bg-dark text-white">
                                <h5 className="card-title text-warning">Front End</h5>
                            </div>
                            <ul className="list-group list-group-flush text-white">
                                <li className="list-group-item bg-dark border">1. HTML, CSS, JAVASCRIPT</li>
                                <li className="list-group-item bg-dark border">2. REACT </li>
                                <li className="list-group-item bg-dark border">3. NEXT.JS</li>
                                <li className="list-group-item bg-dark border">4. FIREBASE</li>
                                <li className="list-group-item bg-dark border">5. MATERIAL UI</li>
                                <li className="list-group-item bg-dark border">6. REACT BOOTSTRAP</li>

                            </ul>
                        
                        </div>
                    
                    </div>
                    
                    <div className="col-md-4 my-3">
                       <div className="card">
                            
                            <div className="card-body bg-dark text-white">
                                <h5 className="card-title text-warning">Back End</h5>
                            </div>
                            <ul className="list-group list-group-flush text-white">
                                <li className="list-group-item bg-dark border">1. NODE.JS</li>
                                <li className="list-group-item bg-dark border">2. EXPRESS.JS </li>
                                <li className="list-group-item bg-dark border">3. MONGODB</li>
                                <li className="list-group-item bg-dark border">4. NPM</li>
                                <li className="list-group-item bg-dark border">5. API</li>
                                <li className="list-group-item bg-dark border">6. HEROKU</li>
                            </ul>
                        
                        </div>
                    
                        </div>
                        
                        <div className="col-md-4 my-3">
                             
                                <div className="card">
                            
                            <div className="card-body bg-dark text-white">
                                <h5 className="card-title text-warning">Tools</h5>
                            </div>
                            <ul className="list-group list-group-flush text-white">
                                <li className="list-group-item bg-dark border">1. VS CODE</li>
                                <li className="list-group-item bg-dark border">2. GITHUB </li>
                                <li className="list-group-item bg-dark border">3. GOOGLE CHROME DEV TOOL</li>
                                <li className="list-group-item bg-dark border">4. NETLIFY</li>
                                <li className="list-group-item bg-dark border">5. FIREBASE</li>
                                <li className="list-group-item bg-dark border">6. HEROKU</li>

                            </ul>
                        
                        </div>
                        </div>
                    
                    </div>
                    
                    
            </div>
            
            <div className="d-flex justify-content-center p-3">
             <a className="btn btn-success" href="https://drive.google.com/uc?export=download&id=16lU6OjZoD96_bjQaJ4Ql4sYR3d1UTlqw"><FontAwesomeIcon icon={faDownload} /> Download Resume </a>
            </div>
            
            <Footer></Footer>
            </div>
            
         
       
    )
}

export default About


          
                   