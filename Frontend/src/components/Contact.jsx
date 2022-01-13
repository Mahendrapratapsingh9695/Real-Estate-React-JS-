import React from 'react';
import Navbar from './Navbar';

function Contact(){
    return(
        <div> <Navbar/>
        <div className='contact'>
            
            <h3>Get in Touch</h3>
            <h5>Call us at: 1800 41 99099 </h5>
            <h5>SMS: BUY to 56070</h5>
            <h5>E-mail: realestate@gmail.com</h5>
            <h5>Hours of Operation: </h5>
            <p class="cont">Mon-Fri : 9:00am to 6:00pm<br/>
            Sat and Sun : Closed<br/><br/>
            Real Estate Office<br/>
            B-60, Sector-4, Rohini, Delhi<br/>
            70, Navi Mumbai, Mharashtra</p>

        </div>
        </div>
    )
}
export default Contact;