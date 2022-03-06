import React from 'react';
import PostCard from '../postCard'
import '../../styles/profile.css'

const Profile = () => {
    return (
        <div style={{ maxWidth: '80%', margin: '0px auto' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                margin: '18px 0px',
                paddingBottom: '10px',
                borderBottom: '3px solid #6a1b9a'
            }}>
                <div >
                    <img style={{ width: "160px", height: "160px", borderRadius: "80px" }} alt="profile" src="https://res.cloudinary.com/breellz/image/upload/v1646588331/Flipper/2_gpa73o.png" />
                </div>
                <div>
                    <h4 id='profile-name'>Bassit Owolabi</h4>
                    <div>
                        <h6>Email address</h6>
                        <h6>Phone Number</h6>
                        <h6>50 Posts</h6>
                        <button className="btn waves-effect waves-light #6a1b9a purple darken-3">Edit Profile
                        </button>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <div class="row">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </div>
        </div>
    )
}

export default Profile