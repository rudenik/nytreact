import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Jumbotron from "../Jumbotron";
import Card from "../Card";
import API from "../../utils/API";


class Home extends Component {
    state = {
        docs: this.props.results
    }
    handleSaveClick = (article) => {
        console.log(article);
        // API.saveArticle(article);
    }

    componentWillReceiveProps(props) {
        this.setState({ docs: props });
    }
    resultsRender = () => {
    // console.log(this.state.docs);
    return (
        this.state.docs.state.map(element => 
            (
                
                <Card key={element._id} title={element.headline.main} byline={element.snippet} link={element.web_url} saveUrl={this.handleSaveClick(element)}/>
                
            )))
    }
   
    render() {
        if (!this.state.docs) {
            return (
                <Container Fluid>
                    <Jumbotron>
                        <h1>Nothign to see here</h1>
                    </Jumbotron>
                </Container>

            )
        } else {
            return (
                <Container Fluid>
                    <Jumbotron>
                        <h1>Results</h1>
                        {this.resultsRender()}
                    </Jumbotron>
                </Container>
                    )
                }
        
        
            }
        
        
        }

        //photo={"https://www.nytimes.com/" + element.multimedia[8]["url"]} 
        
export default Home;