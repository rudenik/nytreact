import React, { Component } from "react";
import Moment from "react-moment";

class Card extends Component {
    handleSaveClick = (article) => {
        console.log(article);
        var artToSave = {
            _id: article._id,
            title: article.headline.main,
            byline: article.snippet,
            url: article.web_url,
            date: article.pub_date
        }
        this.props.saveCallBack(artToSave);
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
