import React from 'react';
import PostCard from '../postCard'
import HomeNavBar from '../HomeNavBar';
import '../../styles/Home.css'

const Home = () => {
    return (
        <div>
            {/* <!-- Navbar goes here --> */}

{/* <!-- Page Layout here --> */}
<div class="row">

  <div class="col s3">
    <HomeNavBar />
  </div>

  <div class="col s9">
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

export default Home