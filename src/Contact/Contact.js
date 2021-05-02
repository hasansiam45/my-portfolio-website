import React from 'react'
import Footer from '../Footer/Footer'
import MyNavbar from '../Navbar/MyNavbar'

const Contact = () => {
    return (
        <div className="text-center bg-dark text-white">
            <MyNavbar></MyNavbar>
            <h3 className="p-3">Contact With Me</h3>
            <form name="contact" method="POST" data-netlify="true">
                
            <input className="p-2 rounded" type="text" name="name" id="name" placeholder="Your Name" /> <br/> <br/>
            <input className="p-2 rounded" type="email" name="email" id="email" placeholder="Your Email" /> <br/> <br/>
            <textarea className="p-2 mb-4 rounded" name="message" id="message" cols="40" rows="7" placeholder="Your Message"></textarea> <br/> 
            <button className="btn btn-primary" type="submit">SEND</button>
            </form>
            <Footer></Footer>
        </div>
    )
}

export default Contact
