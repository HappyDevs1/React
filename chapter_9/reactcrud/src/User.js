import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

class User extends Component {
  constructor() {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    firebase.database().ref('/')
    .on('value', snapshot => {
      console.log(snapshot, val())
    })
  }
  render() { 
    return (
      <div></div>
    );
  }
}
 
export default User;