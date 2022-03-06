import React from 'react';


const postCard = () => {
    return (
        <div>
            <div class="col l4 s12 m6">
            <div class="card">
                <div class="card-image">
                    <img alt='post' src="https://res.cloudinary.com/breellz/image/upload/v1646588331/Flipper/2_gpa73o.png" />
                    <span class="card-title">Card Title</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                    {/* <a href="#">This is a link</a> */}
                </div>
            </div>
            </div>
        </div>
    )
}

export default postCard