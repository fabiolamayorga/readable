import React from "react"
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import {CardActions} from 'material-ui/Card';


export default function VoteControls ({ id , clickUpVote,clickDownVote, isPost }) {
  return (
      <CardActions className="voteControls">
        <span>Vote:</span>
        <ThumbUp onClick = {() => clickUpVote(isPost, id)}/>
        <ThumbDown onClick = {() => clickDownVote(isPost, id)}/>
      </CardActions>

  )
}
