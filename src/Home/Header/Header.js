import React from 'react'
import Typical from 'react-typical';
import myImg from '../../img/2.png';
import ParticlesBg from 'particles-bg';
import Footer from '../../Footer/Footer';
const Header = () => {
    return (
        
        <div className="h-100">
            <ParticlesBg color="#fff" num={300} type="random" bg={true} />
        <div className="header-content">
        <div className="container">

            <div className="row">
                <div className="col-md-8 d-flex py-2 animate__animated animate__lightSpeedInLeft">
                    <div className="justify-content-center align-self-center">
                             <h1 className="text-white bg-dark p-3 rounded"> Hello, <br/> I am {' '}
                            <Typical
                                steps={['Jahid Hasan Siam', 1000]}
                                loop={Infinity}
                                wrapper="b"
                            />
                        </h1> <br/>
            
                    <h5 className="text-white bg-success p-3 rounded">
                        I'm a {' '}
                        <Typical
                            steps={['Web Developer', 1000, 'React-Developer',1000, 'Front-End-Developer',1000]}
                            loop={Infinity}
                            wrapper="b"
                        />
                                </h5>
                          
                            </div>
                        
                            
                </div>
                
                <div className="col-md-4 d-none d-md-block py-2">
                   <img style={{height: '380px', width: '400px',borderBottomLeftRadius: '-15%',borderTopRightRadius: '-15%', borderTopLeftRadius: '35%', borderBottomRightRadius: '35%'}} className="img-fluid py-3 animate__animated animate__lightSpeedInRight" src={myImg} alt=""/>
                </div>
            
                </div>
                
                
            
            </div>
            </div>
            <Footer></Footer>
            </div>
    )
}

export default Header;
