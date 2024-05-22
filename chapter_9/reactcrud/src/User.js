import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { Table, Button, Modal } from 'react-bootstrap';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showDeleteDialog: false,
      selectedUser: {}
    };
    this.add = this.add.bind(this); 
  }

  componentDidMount(){ 
    firebase.database().ref('/') 
    .on('value',snapshot => {
      console.log(snapshot.val()) 
    let returnArr = [];         
    snapshot.forEach(data => { 
    var user = data.val(); 
    user['key'] = data.key; 
    returnArr.push(user);         
    });                        
    this.setState({ 
    users: returnArr 
    })                 
    });            
    }

    add(e) { 
      this.props.history.push("/add");   
      }

      openDeleteDialog(user){     
        this.setState({         
        showDeleteDialog: true, 
        selectedUser: user 
        });    
        }

  render() { 
    const listUsers = this.state.users.map((user) =>    
    <tr key={user.key}> 
    <td>{user.username}</td> 
    <td>{user.email}</td> 
    <td>Edit</td>                 
    <td>Remove</td>
    <Button 
onClick={ this.openDeleteDialog.bind(this,user)}>Remove</Button>  
    </tr>                    
    );  
    return ( 
    <div>
      <Button variant="primary" onClick={this.add}>Add</Button>          
    <Table striped bordered hover> 
    <thead> 
    <tr> 
    <th>Username</th> 
    <th>Email</th> 
    <th>Edit</th> 
    <th>Delete</th> 
    </tr> 
    </thead> 
    <tbody> 
    {listUsers} 
    </tbody> 
    </Table>                   
    </div> 
    ); 
    } 
}

export default User;
