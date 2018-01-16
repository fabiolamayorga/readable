import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux'
import {
  getCategoryPosts,
  getAllPosts,
  getAllCategories,
  getAllPostComments,
  upVotePost,
  addNewPost, editThePost, deleteThePost,voteComment,addNewComment,
  editTheComment,deleteTheComment} from '../actions'
import Root from './Root'
import Category from './Category'
import PostView from './PostView'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import CategorieDropdown from './CategorieDropdown'

class App extends Component {

  toggleShowAllComments = (postId) => {
    this.props.getAllComments(postId)
  }

  clickUpVote = (isPost, id) => {
    if (isPost){
      this.props.upVotePost(id, true)
    }else {
      this.props.voteComment(id, true)
    }
  }

  clickDownVote = (isPost, id) => {
    if (isPost){
      this.props.upVotePost(id, false)
    }else {
      this.props.voteComment(id, false)
    }
  }

  addPost = (values) => {
    this.props.addNewPost(values)
  }

  editThePost = (id, values) => {
    this.props.editThePost(id,values)
  }

  deleteThePost = (id) => {
    this.props.deleteThePost(id)
  }

  addComment = (values) => {
    this.props.addNewComment(values)
  }

  editComment = (id, values) => {
    this.props.editTheComment(id,values)
  }

  deleteComment = (id) => {
    this.props.deleteTheComment(id)
  }




  render() {
    const {categories, posts, postComments} = this.props

    return (
      <div className="container">
        {categories.length > 0 && (
          <CategorieDropdown categories={categories}/>
        )}

        <Route exact path='/' render={() => (
            <Root
              categories={categories}
              posts={posts}
              clickUpVote = {this.clickUpVote}
              clickDownVote = {this.clickDownVote}
              addPost = {this.addPost}
              editThePost = {this.editThePost}
              deleteThePost={this.deleteThePost}
              />
        )}/>

      <Route exact path="/:category" render={ ({ match }) => {
          return (
              <Category
                filter={match.params.category}
                categories={categories}
                posts={posts}
                clickUpVote = {this.clickUpVote}
                clickDownVote = {this.clickDownVote}
                editThePost = {this.editThePost}
              />
          )
        }} />


      <Route exact path="/:category/:postId" render= { ({ match }) => { //Renders Post View
            return(
                <PostView
                  posts={posts}
                  categories={categories}
                  postId={match.params.postId}
                  toggleShowAllComments={this.toggleShowAllComments}
                  postComments={postComments}
                  clickUpVote = {this.clickUpVote}
                  clickDownVote = {this.clickDownVote}
                  editThePost = {this.editThePost}
                  addComment={this.addComment}
                  editComment={this.editComment}
                  deleteComment={this.deleteComment}
                  />
            )
        }} />

      </div>

    )
  }
}


function mapStateToProps (state) {
  return {
      ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (data) => dispatch(getAllCategories()),
    getPosts: (data) => dispatch(getAllPosts()),
    getAllComments: (postId) => dispatch(getAllPostComments(postId)),
    getPostByCategory: (category) => dispatch(getCategoryPosts(category)),
    upVotePost: (id, isUpvote) => dispatch(upVotePost(id, isUpvote)),
    addNewPost: (values) => dispatch(addNewPost(values)),
    editThePost:(id, values) => dispatch(editThePost(id, values)),
    deleteThePost:(id)=> dispatch(deleteThePost(id)),
    voteComment: (id, isUpvote) => dispatch(voteComment(id, isUpvote)),
    addNewComment: (values) => dispatch(addNewComment(values)),
    editTheComment:(id, values) => dispatch(editTheComment(id, values)),
    deleteTheComment:(id)=> dispatch(deleteTheComment(id)),

  }

}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
