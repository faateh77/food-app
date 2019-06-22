import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



class CombinedButtons extends Component{
  
    // const classes = useStyles();
      render(){
        
        return(
            <Button variant="contained" color="primary" >
            {this.props.text}
          </Button>
          
        )
      }
    }
    
    export default CombinedButtons