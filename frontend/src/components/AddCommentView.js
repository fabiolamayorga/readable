import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import serializeForm from 'form-serialize'
import uuid from 'uuid/v1'


class AddCommentView extends Component {
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
    values.parentId = this.props.postId
    this.props.addComment(values)
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
        <RaisedButton label="Add New Comment" onClick={this.handleOpen} className="add-button" primary={true}/>
        <Dialog
          title="Add a New Comment"
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
          <TextField
          hintText="Comment Body"
          name="body"
          floatingLabelText="Comment Text"
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

export default AddCommentView
