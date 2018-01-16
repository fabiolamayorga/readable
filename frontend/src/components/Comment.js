import React from "react";
import VoteControls from './VoteControls'
import EditCommentView from './EditCommentView'
import RaisedButton from 'material-ui/RaisedButton';


function formatDate (timestamp) {
  var date = new Date(timestamp*1000)
  return date.toString()
}

export default function Comment ({ comment,  clickUpVote, clickDownVote, editComment, deleteComment }) {
  return (
    comment.deleted === false && (
      <div key={comment.id} className="comment">
        <div className="comment-author">Comment Author:{comment.author}</div>
        <div className="comment-date">Comment Date:{formatDate(comment.timestamp)}</div>
        <div className="comment-body">{comment.body}</div>
        <div className="comment-score">Comment Score: {comment.voteScore}</div>
        <VoteControls isPost={false} id={comment.id} clickUpVote={clickUpVote} clickDownVote={clickDownVote}/>
        <EditCommentView editComment={editComment} comment={comment}/>
        <RaisedButton label="Delete comment" onClick={()=> deleteComment(comment.id)} className="addButton"/>
      </div>
    )
  )
}
