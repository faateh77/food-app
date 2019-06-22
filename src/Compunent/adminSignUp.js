import React from 'react';
import Kuchbhi from '../Compunent/input text'
import Radio from '../Compunent/radio'
import Button from '../Compunent/button'
import UploadButton from'./uploadButton'
import CssStyle from '../style/style.css'
function App() {
  return (
    <div className="App">
      <div id="signUpTopDiv">
        <h1>
          Admin
        </h1>
      </div>
      <div>
        <div className = "inlineDiv">
          <Kuchbhi title="Name" type="name"/> 
        </div>
        <div className = "inlineDiv">
        <Kuchbhi title="Email" type="email"/>
        </div>
        <div className = "inlineDiv">
        <Kuchbhi title="Password" type="password"/>
        </div>
        
      </div>
      <div>
      <div className = "inlineDiv">
        <Kuchbhi title="Confim password" type="password"/>
        </div>
        <div className = "inlineDiv">
          <Kuchbhi title="Country" type="country"/> 
        </div>
        <div className = "inlineDiv">
        <Kuchbhi title="City" type="city"/>
        </div>
        <div>
            <UploadButton/>
        </div>

        <div>
          <div>
            <Button text="Sign Up"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
