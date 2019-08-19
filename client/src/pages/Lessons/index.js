import React, { Component } from "react";
//import UpdateForm from "../components/updateform/index";
import Units from "../../components/Units/index";
import unitdata from "../../units.json";
import "./style.css";
import Footer from "../../components/Footer/index";
import Navbar from "../../components/Navbar/index";

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
            <div>
                <Navbar></Navbar>
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
                    <div className="row">
                        <div className="col-sm-8 col-md-8 col-lg-8">

                        </div>
                        <div className="ad-container col-sm-4 col-md-4 col-lg-4">
                            <p>Ad goes here</p>
                        </div>
                    </div>
                </div>
            </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Lessons;
