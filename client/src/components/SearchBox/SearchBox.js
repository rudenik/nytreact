import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Container, Col, Row } from "../Grid";
import Input from "../Input";
import "./SearchBox.css";


class SearchBox extends Component {
    state = {
        term: "",
        begin_date: "",
        end_date: ""
    }

    handleInputChnage = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.callBackToApp(this.state);
        this.setState({term: "", begin_date: "", end_date: ""});
    };

    render() {
        return (
            <Container Fluid>
                    <Jumbotron>
                            <h3>
                                Enter search parameters to query the NYT API
                        </h3>
                            <form>
                                <label >Search Term</label>
                                <Input name="term" id="term" type="text" onChange={this.handleInputChnage} value={this.state.term} placeholder="EG. 'Water Gate' (required)" />
                                <Row>
                                <Col size="md-6">
                                <label >Start Date</label>
                                <Input name="begin_date" id="begin_date" type="date" onChange={this.handleInputChnage} value={this.state.startDate} placeholder="yyyy/mm/dd (optional)" />
                                </Col>
                                <Col size="md-6">
                                <label >End Date</label>
                                <Input name="end_date" id="end_date" type="date" onChange={this.handleInputChnage} value={this.state.endDate} placeholder="yyyy/mm/dd (optional)" />
                                </Col>
                                </Row>
                                <Row>
                                <Col size="md-12">
                                <label>
                                <button type="button" className="btn btn-primary"  onClick={this.handleFormSubmit}>Query API</button>
                                </label>
                                </Col>
                                </Row>
                            </form>
                            </Jumbotron>
                </Container>
        )
    }
}

export default SearchBox;