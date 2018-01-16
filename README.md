# Readable API Server

## Get the environment up and running

To get started developing right away:

* Install and start the API server
    - `cd frontend/src/utils/api-server`
    - `npm install`
    - `node server`
* In another terminal window, install and start the project
    - `cd frontend`
    - `npm install`
    - `npm start`

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).

## Access The API Server

To accesss the backend server in your code, we have stored the URL to the API server in the environment variable `REACT_APP_BACKEND` which you can access in your code using `process.env.REACT_APP_BACKEND`. You can see this in action in `frontend/src/App.js` in `componentDidMount`.


## Navigation
- The side list of items allows the user to go to the each of the categories of the project.
- Clicking the titles of the each Post will redirect the user to see the details of that specific post.


## Notes
- The 'SHOW COMMENTS' button only dispatch the action to bring the comments for the current post, if there aren't comments nothing happens.
