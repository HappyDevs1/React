import React, { Component } from 'react'; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User'

class App extends Component { 
constructor(){ 
super(); 
console.log(firebase);
} 
render() { 
return ( 
<div> 
  <User />
</div> 
);
}
}
export default App;