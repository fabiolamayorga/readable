import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import serializeForm from 'form-serialize'


class EditCommentView extends Component {
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
    values.timestamp = Date.now()
    this.props.editComment(this.props.comment.id,values)
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

    const {comment} = this.props

    return (
      <div>
        <RaisedButton label="Edit comment" onClick={this.handleOpen} class="button"/>
        <Dialog
          title="Edit comment"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <TextField
            hintText="Author"
            name="author"
            defaultValue={comment.author}
            disabled={true}
            floatingLabelText="Author:"

          /><br/>
          <TextField
          hintText="comment Body"
          name="body"
          defaultValue={comment.body}
          floatingLabelText="comment Text"
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

export default EditCommentView
