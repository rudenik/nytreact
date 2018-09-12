import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../Jumbotron";
import { Container } from "../Grid";
import SavedCard from "../SavedCard";

class Saved extends Component {
    state = {
        savedArticles: []
    }

    componentWillMount(){
        this.getSaved();
    }
    getSaved = () =>{
        API.getArticles()
        .then(res => {
            console.log(res);
            this.setState({ savedArticles: res.data})
        }            
        )}
    
    deleteArticle = (article) => {
        console.log("delete Article Called");
        API.deleteArticle(article)
        //find the deleted article in the array and pop it and re-set the state
        
    }

    savedArticleRender = () => {
        console.log(this.state.savedArticles)
        return (
             this.state.savedArticles.map(element=>
                (
                <SavedCard key = {element._id} title={element.title} 
        byline={element.byline} link={element.web_url} articleToDelete={element._id} 
        date={element.pub_date} deleteClick={this.deleteArticle}/>
            )))
    }
    
    render(){
        return (
            <Container fluid>
                <Jumbotron>
                    {this.savedArticleRender()}
                </Jumbotron>
            </Container>
        )
    }
}

export default Saved;