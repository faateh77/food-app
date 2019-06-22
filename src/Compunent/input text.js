import React, { Component } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




class TextFields extends Component{
  
// const classes = useStyles();
  render(){
    console.log(this.props)
    return(
      <TextField
        id="standard-dense"
        label={this.props.title}
        type = {this.props.type}
        margin="normal"
      />
    )
  }
}

export default TextFields
