import React, { Component } from 'react';

class Form extends Component {
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
        //perform api query
        // this.setState({ term: term.value, startDate: startDate.value, endDate: endDate.value });

    };

    render(){
        return(
            <form>
                <input
                type="text"
                placeholder="Search Term"
                name="term"
                value={this.state.term}
                onChange={this.handleInputChnage}
                />

            </form>
        )
    }
}