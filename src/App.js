import React from 'react';
import './App.css';
import{BrowserRouter as Router,Route} from "react-router-dom";
import Pcontent from './assets/components/Pcontent';
import Home from './assets/components/Home';
class App extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/pcontent/:id" component={Pcontent}/>
        </div>
      </Router>  
  );
 }
}

export default App;
