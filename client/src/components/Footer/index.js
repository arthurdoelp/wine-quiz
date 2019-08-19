import React from "react";
//import UpdateForm from "../components/updateform/index";
import "./style.css";

function Footer(props) {
    return (

        <footer>
            <div className="footer-container col-sm-12 col-md-12 col-lg-12">
                <div className="footer-links">
                    <a href="/references">References</a>
                    <a>Terms</a>
                    <a>Contact</a>
                </div>
            </div>
        </footer>
        // <a href={`/lessons/${props.title}`}>
        //     <div className="unit-container col-sm-12 col-md-12 col-lg-12">
        //         <div className="image-container" onClick={() => props.clickedUnit(props.title)}>
        //             <img className="image" alt={props.title} src={props.image}></img>
        //             <h1 className="number">{props.id}</h1>
        //         </div>
        //         <h3 className="title">{props.title}</h3>
        //     </div>
        // </a>

    );
}

export default Footer;