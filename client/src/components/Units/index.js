import React from "react";
//import UpdateForm from "../components/updateform/index";
import "./style.css";

function Units(props) {
    return (
        <div className="container scroll-container">
            <a href={`/lessons/${props.title}`} onClick={() => props.clickedUnit(props.title)}>
                <div className="unit-container col-sm-12 col-md-12 col-lg-12">
                    <div className="image-container" >
                        {props.locked ?
                            <div>
                                <img className="locked-image" src="../../../images/Locked-Item.png" alt="locked"></img>
                                <img className="image" alt={props.title} src={props.image}></img>
                            </div>
                            :
                            <img className="image" alt={props.title} src={props.image}></img>
                        }

                        {/* <h1 className="number">{props.id}</h1> */}
                    </div>
                    {props.locked ?
                        <h3>Coming Soon</h3>
                        :
                        <h3 className="title">{props.title}</h3>
                    }
                </div>
            </a>

        </div>
    );
}

export default Units;