import React, { Component } from 'react'; 
import axios from 'axios';

class GitHub extends Component {
  constructor() {
    super();
    this.state = {
      isLoading : true
    };
  }
  componentDidMount() {
    this.getGitHubData('greg')
  }
  getGitHubData(_searchTerm){                 
    axios.get("https://api.github.com/search/users?q="+_searchTerm) 
    .then(res => {                                    
    this.setState({ 
    isLoading : false,                   
    })                             
    console.log(res.data.items);  
    });              
    }
}

export default GitHub;