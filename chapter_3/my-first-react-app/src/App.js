import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
class App extends Component {
  formatName(user){
  return user.firstName + ' ' + user.lastName;
  }
  render() {
  const user ={
  firstName:'Happy',
  lastName:'Mahlangu'
  };
  return (
  <div>
    <h1>Hello, {this.formatName(user)}</h1> 
    <Products />
    <Button variant="danger">Default</Button>
 </div>
 );
 }
}
export default App;