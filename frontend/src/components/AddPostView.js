import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import serializeForm from 'form-serialize'
import uuid from 'uuid/v1'


class AddPostView extends Component {
  state = {
    open: false,
    author: "",
    id: "",
    timestamp: 0,
    bodyPost: '',
    categorySelected: ''
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    values.timestamp = Date.now()
    values.id = uuid()
    this.props.addPost(values)
    this.handleClose()
  }

  handleChange = (event, index, value) => this.setState({value});


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton label="Add New Post" onClick={this.handleOpen} primary={true} />
        <Dialog
          title="Add a New Post"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <TextField
            hintText="Author"
            name="author"
          /><br/>
        <select onChange={this.handleChange} name="category">
            <option value={"react"}>React</option>
            <option value={"redux"}>Redux</option>
            <option value={"udacity"}>Udacity</option>
        </select><br/>
        <TextField
          hintText="Post Title"
          name="title"
        /><br/>
          <TextField
          hintText="Post Body"
          name="body"
          floatingLabelText="Post Text"
          multiLine={true}
          rows={2}
          /><br />
      <button>submit</button>

    </form>


        </Dialog>
      </div>
    );
  }
}

export default AddPostView
