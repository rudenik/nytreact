import React, { Component } from "react";
import SearchBox from "./components/SearchBox"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Home from "./components/Home";
import { Row, Col, Container } from "./components/Grid";
import Saved from "./components/Saved";


class App extends Component {
  state = {
    results: {},
  }

  performSearch = searchParams => {
    console.log(searchParams);
    API.searchArticles(searchParams)
        .then(res => this.setState({ results : res.data.response.docs }) 
        )
        .catch(err => console.log(err))
    };

    
    
  render(){
    return(
    <div>
      <SearchBox callBackToApp = {this.performSearch}/>
      <Home state = {this.state.results} />
      <Saved/>
    </div>
  
    )}

};
  

export default App; 


// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
