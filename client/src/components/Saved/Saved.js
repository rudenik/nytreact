import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../Jumbotron";
import { Container } from "../Grid";
import SavedCard from "../SavedCard";

class Saved extends Component {
    state = {
        savedArticles: [],
        saved: this.props.saved
    }
    componentWillReceiveProps(){
        this.getSaved();
        
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
    
    removeArticle = (article) => {
        console.log("delete Article Called");
        let filteredArray = this.state.savedArticles.filter(item => item._id !== article)
        console.log(filteredArray)
        this.setState({savedArticles: filteredArray});
        API.deleteArticle(article);
    }

    savedArticleRender = () => {
        console.log(this.state.savedArticles)
        return (
             this.state.savedArticles.map(element=>
                (
                <SavedCard key = {element._id} title={element.title} 
        byline={element.byline} link={element.web_url} articleToDelete={element._id} 
        date={element.pub_date} deleteClick={this.removeArticle}/>
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