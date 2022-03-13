import React from 'react';
import PostCard from '../postCard'
import '../../styles/Home.css'

const Home = () => {
  return (
    <div className="container">
      <div className="Home">
        <h2>FLIPPER</h2>
        <h1>SEARCH BAR</h1>
      </div>
      <div className="row">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  )
}

export default Home