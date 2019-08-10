import React from "react";
//import UpdateForm from "../components/updateform/index";
import "./style.css";

function Skills(props) {
    return (
        <div className="container">
            <div className="unit-container col-sm-3 col-md-3 col-lg-3">
                <div className="image-container" onClick={() => props.clickedSkill(props.title)}>
                    <a href={`/lessons/${props.unit}/${props.title}`}><img className="image" alt={props.title} src={props.image}></img></a>
                    <h1 className="number">{props.unitId}</h1>
                </div>
                <h3 className="title">{props.title}</h3>
            </div>

        </div>
    );
}

export default Skills;