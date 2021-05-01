import React from 'react'
import Typical from 'react-typical';
import myImg from '../../img/profile4.png';

const Header = () => {
    return (
        
        <div className="header-content bg-dark">
            
        <div className="container">

            <div className="row">
                <div className="col-md-6 d-flex py-2">
                    <div className="justify-content-center align-self-center">
                             <h1 className="text-white">
                            <Typical
                                steps={['Hello, I am Jahid Hasan Siam', 1000]}
                                loop={Infinity}
                                wrapper="b"
                            />
                        </h1> <br/>
            
                    <h5 className="text-success">
                        I'm a {' '}
                        <Typical
                            steps={['Web Developer', 1000, 'React-Developer',1000, 'Front-End-Developer',1000]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </h5>
                    </div>
                </div>
                
                <div className="col-md-6 py-2">
                   <img className="img-fluid" src={myImg} alt=""/>
                </div>
            
                </div>
                
                
            
            </div>
  
            </div>
    )
}

export default Header;
