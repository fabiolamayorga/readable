import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import serializeForm from 'form-serialize'


class AddPostView extends Component {
  state = {
    open: false,
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
    this.props.editThePost(this.props.post.id,values)
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

    const {post} = this.props

    return (
      <div>
        <RaisedButton label="Edit Post" onClick={this.handleOpen} />
        <Dialog
          title="Edit Post"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <TextField
            hintText="Author"
            name="author"
            defaultValue={post.author}
            disabled={true}
            floatingLabelText="Author:"

          /><br/>
        <select name="category" disabled >
            <option value={post.category}>{post.category}</option>
        </select><br/>
        <TextField
          hintText="Post Title"
          floatingLabelText="Post Title"
          name="title"
          defaultValue={post.title}

        /><br/>
          <TextField
          hintText="Post Body"
          name="body"
          defaultValue={post.body}
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
