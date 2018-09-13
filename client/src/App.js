import React, { Component } from "react";
import SearchBox from "./components/SearchBox"
import API from "./utils/API";
import Home from "./components/Home";
import Saved from "./components/Saved";

//double check the time parameters in the NYT API
//check why visit button on saved article components text is dark? 
//css?
//heroku?
//clean up console errors. 
//clean up console calls.

class App extends Component {
  state = {
    results: {},
    saveResults: []
  }

  performSearch = searchParams => {
    console.log(searchParams);
    API.searchArticles(searchParams)
        .then(res => this.setState({ results : res.data.response.docs }) 
        )
        .catch(err => console.log(err))
    };

    tellSavedToRefresh = (articleToSave) => {
      console.log(articleToSave)
      API.saveArticle(articleToSave);
      let updatedArray = this.state.saveResults.push(articleToSave);
      this.setState({saved: updatedArray });
    }

    
  render(){
    return(
    <div>
      <SearchBox callBackToApp = {this.performSearch}/>
      <Home state = {this.state.results} refreshSaved = {this.tellSavedToRefresh} />
      <Saved saved = {this.state.saveResults}/>
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
