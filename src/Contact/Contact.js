import React from 'react'
import MyNavbar from '../Navbar/MyNavbar'

const Contact = () => {
    return (
        <div className="text-center bg-dark text-white">
            <MyNavbar></MyNavbar>
            <h3 className="p-3">Contact With Me</h3>
            <form method="POST">
                
            <input className="p-2 rounded" type="text" placeholder="Your Name" /> <br/> <br/>
            <input className="p-2 rounded" type="email" name="" id="" placeholder="Your Email" /> <br/> <br/>
            <textarea className="p-2 mb-4 rounded" name="" id="" cols="40" rows="7" placeholder="Your Message"></textarea>
            
            </form>
        </div>
    )
}

export default Contact
