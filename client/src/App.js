import React, { Component } from "react";
import SearchBox from "./components/SearchBox"
import API from "./utils/API";
import Home from "./components/Home";
import Saved from "./components/Saved";



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
    
    API.searchArticles(searchParams)
        .then(res => this.setState({ results : res.data.response.docs }) 
        )
        .catch(err => console.log(err))
    };

    tellSavedToRefresh = (articleToSave) => {
      
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

