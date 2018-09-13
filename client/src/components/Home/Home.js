import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Jumbotron from "../Jumbotron";
import Card from "../Card";
import API from "../../utils/API";


class Home extends Component {
    state = {
        docs: this.props.results
    }
    componentWillReceiveProps(props) {
        this.setState({ docs: props });
    }
    homeSaveCallBack = (article) => {
        this.props.refreshSaved(article);
    }
    resultsRender = () => {
    return (
        this.state.docs.state.map(element => 
            (
                <Card key={element._id} title={element.headline.main} 
                byline={element.snippet} link={element.web_url} articleToSave={element} 
                date={element.pub_date} saveCallBack={this.homeSaveCallBack}/>
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