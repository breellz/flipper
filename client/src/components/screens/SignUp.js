import React from 'react';
import {Link} from 'react-router-dom'
import '../../styles/signup.css'


const Home = () => {
    return (
        <div className='signup-card'>
            <div className="card signup-auth-card input-field">
                <h2 id='header-text'>Flipper</h2>
                <p>Buy and sell faster</p>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="number" placeholder="Phone number" />
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className="btn waves-effect waves-light #6a1b9a purple darken-3">Sign Up
                </button>
                <h6> Already have an account?<Link to='/signin'> Sign In</Link></h6>
            </div>
        </div>
    )
}

export default Home