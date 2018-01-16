//import * as api from '../utils/api-server/categories';
const api = process.env.REACT_APP_BACKEND || 'http://localhost:3001'

const headers = {
  'Authorization': 'whatever-you-want'
}

/*Const for Categories*/
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORY_POST = 'GET_CATEGORY_POST'


/*Consts for Post Actions*/
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_POST = 'GET_POST'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'


export const UP_VOTE = 'UP_VOTE'

/*Consts for comments*/
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT'
export const EDIT_POST_COMMENT = 'EDIT_POST_COMMENT'
export const DELETE_POST_COMMENT = 'DELETE_POST_COMMENT'
export const GET_POST_COMMENT = 'GET_POST_COMMENT'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'


export const getAllCategories = () => dispatch =>(
  fetch(
    `${api}/categories`,
     {headers}
   )
    .then(res => res.json())
    .then(data => dispatch(getCategories(data.categories)),
        	error => console.error('error',error))
);

export const getAllPosts = () => dispatch =>(
  fetch(
    `${api}/posts`,
     {headers}
   )
    .then(res => res.json())
    .then(data => dispatch(getPosts(data)),
          	error => console.error('error',error))
);


export const getAllPostComments = (postId) => dispatch =>(
  fetch(
    `${api}/posts/${postId}/comments`,
    {headers}
  )
  .then(res => res.json())
  .then(data => dispatch(getPostsComments(data)),
        error => console.error('error',error))
);

export const getCategoryPosts = (category) => dispatch => ( //Get Posts filtered by category
  fetch(
    `${api}/${category}/posts`,
    {headers}
  )
  .then(res => res.json())
  .then(data => dispatch(getPostByCategory(data)),
        error => console.error('error',error))
);

export const upVotePost = (id, isUpvote) => dispatch => (
  fetch(
    `${api}/posts/${id}`,{
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ option: isUpvote ? "upVote":"downVote"})
    }
  )
  .then(res => res.json())
  .then(data => {
      dispatch(upVote(data));
      error => console.error('error',error)})
);

export const voteComment = (id, isUpVote) => dispatch => (
  fetch(
    `${api}/comments/${id}`,{
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ option: isUpVote ? "upVote":"downVote"})
    }
  )
  .then(res => res.json())
  .then(data => {
      dispatch(upVoteComent(data));
        error => console.error('error',error)})
)

export const addNewPost = (values) => dispatch => (
  fetch(
    `${api}/posts`,{
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(values)
    }
  )
  .then(res => res.json())
  .then(data => {
      dispatch(addPost(data));
        error => console.error('error',error)})
)

export const editThePost = (id, values) => dispatch => (
  fetch(
    `${api}/posts/${id}`,{
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(values)
    }
  )
  .then(res => res.json())
  .then(data => {
      dispatch(editPost(data));
        error => console.error('error',error)})
)

export const deleteThePost = (postId) => dispatch =>(
  fetch(
    `${api}/posts/${postId}`,{
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
       }
    })
  .then(res => res)
  .then(data => dispatch(deletePost(postId)),
        error => console.error('error',error))
);

export const addNewComment = (values) => dispatch => (
  fetch(
    `${api}/comments`,{
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }
  )
  .then(res => res.json())
  .then(data => {
      dispatch(addComment(data));
        error => console.error('error',error)})
)

export const editTheComment = (id, values) => dispatch => (
  fetch(
    `${api}/comments/${id}`,{
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }
  )
  .then(res => res.json())
  .then(data => {
      dispatch(editComment(data));
        error => console.error('error',error)})
)

export const deleteTheComment = (commentId) => dispatch =>(
  fetch(
    `${api}/comments/${commentId}`,{
      method: 'DELETE',
      headers: {
        ...headers }
    })
  .then(res => res.text())
  .then(data => dispatch(deleteComment(commentId)),
        error => console.error('error',error))
);


function getCategories(categories){
 return {
    type: GET_CATEGORIES,
    categories,
  }
}

function getPosts(posts){
 return {
    type: GET_ALL_POSTS,
    posts,
  }
}


function getPostsComments(comments){
 return {
    type: GET_POST_COMMENT,
    comments
  }
}

function getPostByCategory(postsByCategory){
  return {
     type: GET_CATEGORY_POST,
     postsByCategory,
   }
}

function upVote(post){
  return {
     type: UP_VOTE,
     post,
   }
}

function upVoteComent(comment) {
  return {
     type: UP_VOTE_COMMENT,
     comment,
   }
}

export function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function editPost (post) {
  return {
    type: EDIT_POST,
    post,
  }
}

export function deletePost (id) {
  return {
    type: DELETE_POST,
    id,
  }
}

export function addComment(comment) {
  return {
    type: ADD_POST_COMMENT,
    comment,
  }
}

export function editComment(comment) {
  return {
    type: EDIT_POST_COMMENT,
    comment,
  }
}

export function deleteComment(id) {
  return {
    type: DELETE_POST_COMMENT,
    id,
  }
}
