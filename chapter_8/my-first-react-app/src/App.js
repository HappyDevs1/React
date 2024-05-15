 
import React, { Component } from 'react'; 
import GitHub from './GitHub'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
 
class App extends Component {        
  render() {         
    return ( 
      <div> 
        <Header /> 
      </div> 
    ); 
  } 
} 
export default App; 
 
class Header extends Component { 
  render(){ 
    return ( 
        <BrowserRouter> 
          <div>                    
            <Switch>               
              <Route path="/github" component={GitHub} />               
              <Route exact path="/" component={Home} />              
              <Route path="/*" component={NotFound} />                        
            </Switch>    
          </div>   
        </BrowserRouter>               
    ) 
  } 
} 
 
class Home extends Component { 
  render(){ 
    return ( 
      <div> 
        Home         
      </div> 
    ) 
  } 
} 
 
class NotFound extends Component { 
  render(){
    return <div>Not Found</div>
  }
} 
