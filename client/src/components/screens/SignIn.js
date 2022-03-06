import React from 'react';
import {Link} from 'react-router-dom'
import '../../styles/signin.css'


const Home = () => {
    return (
        <div className='signin-card'>
            <div className="card signin-auth-card input-field">
                <h2 id='header-text'>Flipper</h2>
                <p>Buy and sell faster</p>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className="btn waves-effect waves-light #6a1b9a purple darken-3">Sign In
                </button>
                <h6> Don't have an account? <Link to='/signup'>Sign up</Link></h6>
            </div>
        </div>
    )
}

export default Home