import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';




// class TextFields extends Component{
  
// // const classes = useStyles();
//   render(){
//     console.log(this.props)
//     return(
//       <TextField
//         id="standard-dense"
//         label={this.props.title}
//         type = {this.props.type}
//         margin="normal"
//       />
//     )
//   }
// }

// export default TextFields


export default function FormControlLabelPosition() {
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="male"
          control={<Radio color="black" />}
          label="Male"
          labelPlacement="start"
        />
        <FormControlLabel
          value="female"
          control={<Radio color="black" />}
          label="Female"
          labelPlacement="start"
        />
        
        
      </RadioGroup>
    </FormControl>
  );
}
