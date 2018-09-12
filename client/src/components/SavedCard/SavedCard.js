import React, { Component } from "react";
import API from "../../utils/API";
import Moment from "react-moment";

class SavedCard extends Component {
    // const article = props.article;
    handleDeleteClick = (article) => {
        // this.props.onSaveClick(article)
        console.log(article);
        // var 
        
    }
    
    render() {
        
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: "left" }}>{this.props.title}</h5>
                        <p className="card-text" style={{ textAlign: "left" }} >{this.props.byline}</p>
                        <a href={this.props.link} className="btn btn-primary">Visit Article</a>
                        <button onClick={() => this.props.deleteClick(this.props.articleToDelete)} className="btn btn-danger">Delete Article</button>
                    </div>
                    <div className="card-footer text-muted">
                        <Moment>
                            {this.props.date}
                        </Moment>
                    </div>
                </div>
            )
    }
}

export default SavedCard;
