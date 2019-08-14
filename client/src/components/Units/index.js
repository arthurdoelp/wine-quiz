import React from "react";
//import UpdateForm from "../components/updateform/index";
import "./style.css";

function Units(props) {
    return (
        <div className="container scroll-container">
            <a href={`/lessons/${props.title}`}>
                <div className="unit-container col-sm-12 col-md-12 col-lg-12">
                    <div className="image-container" onClick={() => props.clickedUnit(props.title)}>
                        <img className="image" alt={props.title} src={props.image}></img>
                        <h1 className="number">{props.id}</h1>
                    </div>
                    <h3 className="title">{props.title}</h3>
                </div>
            </a>

        </div>
    );
}

export default Units;