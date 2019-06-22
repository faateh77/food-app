import React from 'react';
import Kuchbhi from '../Compunent/input text'
import Radio from '../Compunent/radio'
import Button from '../Compunent/button'
import CssStyle from '../style/style.css'
function App() {
  return (
    <div className="App">
      <div id="signUpTopDiv">
        <h1>
          Login
        </h1>
      </div>
      <div>
        <div >
        <Kuchbhi title="Email" type="email"/>
        </div>
        <div >
        <Kuchbhi title="Password" type="password"/>
        </div>
      </div>
      <div>
        
        <div>
            <br/>
          <div>
            <Button text="Sign Up"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
