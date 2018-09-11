import React from "react";

const Card = props => {
    if (!props.photo) {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: "left" }}>{props.title}</h5>
                    <p className="card-text" style={{ textAlign: "left" }} >{props.byline}</p>
                    <a href={props.link} className="btn btn-primary">Visit Article</a>
                    <a href={props.saveUrl} className="btn btn-info">Save Article</a>
                </div>
            </div>
        )
    } else {
        <div className="card">
            <img className="card-img-top" src={props.photo} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title" style={{ textAlign: "left" }}>{props.title}</h5>
                <p className="card-text" style={{ textAlign: "left" }} >{props.byline}</p>
                <a href={props.link} class="btn btn-primary">Visit Article</a>
                <a href={props.saveUrl} class="btn btn-info">Save Article</a>
            </div>
        </div>
    }

}



export default Card;

//<img className="card-img-top" src={props.photo} alt="Card image cap"/>