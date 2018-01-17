import React, { Component } from 'react';
import Post from './Post'
import Comment from './Comment'
import RaisedButton from 'material-ui/RaisedButton';
import AddCommentView from './AddCommentView'


class PostView extends Component {

  render() {
    const {posts,
      postId,
      postComments,
      toggleShowAllComments,
      clickUpVote,
      clickDownVote,
      editThePost, addComment, editComment, deleteComment} = this.props
    let selectedPost = []
    let isDeleted = false


    if(posts.length > 0){
      selectedPost = posts.filter(p => p.id === postId)
      isDeleted = selectedPost[0].deleted
    }



    return (
        isDeleted === false ? (

        <div className="view-container">

          {selectedPost.length > 0 && (
            selectedPost.map(post => (
              <Post post={post} key={post.id} commentsCount={postComments.length} clickUpVote={clickUpVote} editThePost={editThePost} clickDownVote={clickDownVote}/>
          ))
          )}

          <RaisedButton onClick={() => toggleShowAllComments(postId)} label="SHOW COMMENTS"/>

          <div className="comments-container">
              {postComments.length > 0 && (
                postComments.map(comment => (
                  <Comment comment={comment} key={comment.id} clickUpVote={clickUpVote}  clickDownVote={clickDownVote} editComment={editComment} deleteComment={deleteComment}/>
                ))
              )}
          </div>
          <AddCommentView addComment={addComment} postId={postId}/>

        </div>
      ): (
        <p>THIS POST HAS BEEN DELETED</p>
      )

    )
  }
}
export default PostView
