import React, { Component } from "react";
//import UpdateForm from "../components/updateform/index";
import Units from "../../components/Units/index";
import unitdata from "../../units.json";
import "./style.css";

class Lessons extends Component {
    state = {
        unitdata
    }

    clickedUnit = title => {
        console.log(title);
        if (title) {
            localStorage.setItem("unit", title);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Units</h1>
                    <div className="scroll-container col-sm-12 col-md-12 col-lg-12">

                        {this.state.unitdata.map(unit => (
                            <div className="scroll-units">
                                <Units
                                    clickedUnit={this.clickedUnit}
                                    id={unit.id}
                                    title={unit.title}
                                    image={unit.image}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        );
    }
}

export default Lessons;
