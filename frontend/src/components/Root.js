import React, { Component } from 'react';
import Post from './Post'
import AddPostView from './AddPostView'
import sortBy from 'sort-by'


class Root extends Component {
  state = {
      order: '-timestamp'
  }
  selectOrder = (e) => {
      this.setState({
          order: e.target.value
      })
  }

 render (){
   const {categories, posts, clickUpVote, clickDownVote, addPost, editThePost,deleteThePost} = this.props

   return (
     <div className="view-container">
       <div className="sort-by-dropwdown">
         <label>Sort Posts By: </label>
         <select value={this.state.order} onChange={this.selectOrder}>
              <option value="-timestamp">Most Recent</option>
              <option value="-voteScore">Popular</option>
          </select>
       </div>

       <div className='posts-container'>
         {posts.length > 0 && (
           posts.sort(sortBy(this.state.order)).map(post => (
             <Post post={post}
               key={post.id}
               clickUpVote={clickUpVote}
               clickDownVote={clickDownVote}
               addPost={addPost}
               editThePost={editThePost}
               deleteThePost={deleteThePost}/>
           ))
         )}
       </div>
       <AddPostView categories={categories} addPost={addPost}/>

     </div>

   )
 }
}

export default Root
