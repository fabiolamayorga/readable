import React from "react";
import { Link } from 'react-router-dom'
import VoteControls from './VoteControls'
import {Card, CardTitle, CardText} from 'material-ui/Card';
import EditPostView from './EditPostView'
import RaisedButton from 'material-ui/RaisedButton';




function formatDate (timestamp) {
  var date = new Date(timestamp*1000)
  return date.toLocaleString()
}

export default function Post ({ post , clickUpVote, clickDownVote, editThePost,deleteThePost, commentsCount }) {
  return (

        post.deleted === false && (
          <Card key={post.id} className="post">
            <Link to={`/${post.category}/${post.id}`}>
              <CardTitle className="post-title">Post Title: {post.title}</CardTitle>
            </Link>
            <CardText>
              <div className="post-author">Author: {post.author}</div>
              <div className="post-category">Category: {post.category}</div>
              <div className="post-time">Date: {formatDate(post.timestamp)}</div>
              <div className="post-body">{post.body}</div>
              <div className="post-score">Score: {post.voteScore}</div>
              {commentsCount > 0 && (
                 <div className="post-comments-count">Comments Count: {commentsCount}</div>
              )}

            </CardText>
            <EditPostView post={post} editThePost={editThePost}/>
            <RaisedButton onClick={()=> deleteThePost(post.id)} label="Delete Post" />
            <VoteControls id={post.id} clickUpVote={clickUpVote} clickDownVote={clickDownVote} isPost={true}/>
          </Card>
      )


  )
}
