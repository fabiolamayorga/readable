import { combineReducers } from 'redux'

import {
	GET_CATEGORIES,
	GET_ALL_POSTS,
	GET_POST_COMMENT,
	UP_VOTE,
	ADD_POST,
	EDIT_POST,
	DELETE_POST,
	UP_VOTE_COMMENT,
	ADD_POST_COMMENT,EDIT_POST_COMMENT,DELETE_POST_COMMENT
}from '../actions'

function categories (state = {}, action){
	switch (action.type) {
      case GET_CATEGORIES:
        return [ ...action.categories ]
      default:
        return state
    }
}

function posts (state = {}, action){
	switch (action.type) {
      case GET_ALL_POSTS:
        return [ ...action.posts ]

			case UP_VOTE:
				return state.map(post => {
					return post.id === action.post.id ? action.post : post
				})

			case ADD_POST:
				return [ ...state,action.post]

			case EDIT_POST:
				return state.map(post => {
					return post.id === action.post.id ? action.post : post
				})

			case DELETE_POST:
				return state.filter(post => post.id !== action.id)

      default:
        return state
    }
}

function postComments (state = {}, action) {
	switch (action.type) {
      case GET_POST_COMMENT:
				return [ ...action.comments ]

			case UP_VOTE_COMMENT:
				return state.map(comment => {
					return comment.id === action.comment.id ? action.comment : comment
				})

			case ADD_POST_COMMENT:
				return [ ...state,action.comment]

			case EDIT_POST_COMMENT:
				return state.map(comment => {
					return comment.id === action.comment.id ? action.comment : comment
				})

			case DELETE_POST_COMMENT:
				return state.filter(comment => comment.id !== action.id)

      default:
        return state
    }
}




export default combineReducers({
  categories,
	posts,
	postComments
})
