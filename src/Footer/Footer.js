import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer bg-dark">
            <ul className="d-flex justify-content-center">
                <li><a target="_blank" href="https://m.facebook.com/obujmon.obujmon.16"> <FontAwesomeIcon icon={faFacebook} /> </a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/jahid-hasan-siam45/"> <FontAwesomeIcon icon={faLinkedin} /> </a></li>
                <li><a target="_blank" href="https://github.com/hasansiam45"> <FontAwesomeIcon icon={faGithub} /> </a></li>

            </ul>
            
            <p className="text-center text-white">Copyright 2021@ all rights reserved by Hasan Siam</p>
        </div>
    )
}

export default Footer
