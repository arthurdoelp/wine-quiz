import React, { Component } from "react";
//import UpdateForm from "../components/updateform/index";
//import Units from "../../components/Units/index";
import unitdata from "../../units.json";

class SkillsOverview extends Component {
    state = {
        unitdata
    }
    render() {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <p>These are the Skills!</p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default SkillsOverview;