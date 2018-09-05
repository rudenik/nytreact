import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import Input from "../Input";

class SearchBox extends Component {
    state = {
        term: "",
        startDate: "",
        endDate: ""
    }

    handleInputChnage = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("form submitted");
        //perform api query
        // this.setState({ term: term.value, startDate: startDate.value, endDate: endDate.value });

    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h3>
                                Enter search parameters to query the NYT API
                        </h3>
                            <form>
                                <label >Search Term</label>
                                <Input name="term" id="term" placeholder="EG. 'Water Gate' (required)" />
                                <label >Start Date</label>
                                <Input name="startDate" id="startDate" placeholder="Search time frame start date (optional)" />
                                <label >End Date</label>
                                <Input name="endDate" id="endDate" placeholder="Search time frame start date (optional)" />
                                <button type="button" className="btn btn-primary"  onClick={this.handleFormSubmit}>Query API</button>
                            </form>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }


}

export default SearchBox;