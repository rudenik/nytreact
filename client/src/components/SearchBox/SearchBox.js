import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Container } from "../Grid";
import Input from "../Input";

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
        console.log("form submitted");
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
                                <Input name="term" id="term" onChange={this.handleInputChnage} value={this.state.term} placeholder="EG. 'Water Gate' (required)" />
                                <label >Start Date</label>
                                <Input name="startDate" id="startDate" onChange={this.handleInputChnage} value={this.state.startDate} placeholder="Search time frame start date (optional)" />
                                <label >End Date</label>
                                <Input name="endDate" id="endDate" onChange={this.handleInputChnage} value={this.state.endDate} placeholder="Search time frame start date (optional)" />
                                <button type="button" className="btn btn-primary"  onClick={this.handleFormSubmit}>Query API</button>
                            </form>
                            </Jumbotron>
                </Container>
        )
    }


}

export default SearchBox;