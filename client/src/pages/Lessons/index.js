import React, { Component } from "react";
//import UpdateForm from "../components/updateform/index";
import Units from "../../components/Units/index";
import unitdata from "../../units.json";

class Lessons extends Component {
    state = {
        unitdata
    }
    render() {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <p>hi</p>
                            {this.state.unitdata.map(unit => (
                                <Units
                                    id={unit.id}
                                    title={unit.title}
                                    image={unit.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
        );
    }
}

export default Lessons;
