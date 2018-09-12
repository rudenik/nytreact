import React, { Component } from "react";
import API from "../../utils/API";
import Moment from "react-moment";

class Card extends Component {
    // const article = props.article;
    handleSaveClick = (article) => {
        // this.props.onSaveClick(article)
        console.log(article);
        // var 
        API.saveArticle({
            _id: article._id,
            title: article.headline.main,
            byline: article.snippet,
            url: article.web_url,
            date: article.pub_date
        });
    }
    
    render() {
        if (!this.props.photo) {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: "left" }}>{this.props.title}</h5>
                        <p className="card-text" style={{ textAlign: "left" }} >{this.props.byline}</p>
                        <a href={this.props.link} className="btn btn-primary">Visit Article</a>
                        <button onClick={() => this.handleSaveClick(this.props.articleToSave)} className="btn btn-info">Save Article</button>
                    </div>
                    <div className="card-footer text-muted">
                        <Moment>
                            {this.props.date}
                        </Moment>
                       
                    </div>
                </div>
            )
        } else {
            return (
            <div className="card">
                <img className="card-img-top" src={this.props.photo} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: "left" }}>{this.props.title}</h5>
                    <p className="card-text" style={{ textAlign: "left" }} >{this.props.byline}</p>
                    <a href={this.props.link} class="btn btn-primary">Visit Article</a>
                    <button onClick={() => this.handleSaveClick(this.props.articleToSave)} class="btn btn-info">Save Article</button>
                </div>
            </div>
            )
        }
            

    }

}

export default Card;

//<img className="card-img-top" src={props.photo} alt="Card image cap"/>
//{this.props.date.toLocaleDateString()}
// {new Intl.DateTimeFormat("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "2-digit"
// }).format(this.props.date)}