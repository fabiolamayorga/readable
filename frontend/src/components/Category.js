import React from 'react';
import Post from './Post'

export default function Category ({ filter, posts, clickUpVote, editThePost }) {
  let filteredPosts = {}

  if(posts.length > 0){
    filteredPosts = posts.filter(p => p.category === filter)
  }

  return (
    <div className='view-container'>
      {filteredPosts.length > 0 && (
        filteredPosts.map(post => (
          <Post post={post} key={post.id} clickUpVote={clickUpVote} editThePost={editThePost}/>
        ))
      )}
    </div>
  )
}
