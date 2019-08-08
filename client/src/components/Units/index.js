import React from "react";
//import UpdateForm from "../components/updateform/index";
import "./style.css";

function Units(props) {
    return (
        <div className="container">
            <div className="unit-container col-sm-3 col-md-3 col-lg-3">
                <div className="image-container">
                    <a href={`/lessons/${props.title}`}><img className="image" alt={props.title} src={props.image}></img></a>
                    <h1 className="number">{props.id}</h1>
                </div>
                <h3 className="title">{props.title}</h3>
            </div>

        </div>
    );
}

export default Units;