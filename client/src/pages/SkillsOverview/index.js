import React, { Component } from "react";
//import UpdateForm from "../components/updateform/index";
//import Units from "../../components/Units/index";
//import unitdata from "../../units.json";
import skillsdata from "../../skills.json";
import Skills from "../../components/Skills/index.js";

class SkillsOverview extends Component {
    state = {
        skillsdata,
        unit: ""
    }

    componentWillMount() {
        localStorage.getItem("unit") && this.setState({ unit: localStorage.getItem("unit") });
    }

    componentDidMount() {
        const skillsdata = this.state.skillsdata.filter(skill => skill.unit === this.state.unit);
        this.setState({ skillsdata });
        // console.log(window.location.pathname.slice(9).replace(/%20/g, " "));
        console.log(this.state.unit);
    }

    clickedSkill = title => {
        console.log(title);
        if (title) {
            localStorage.setItem("skill", title);
        }
    }

    // componentWillUpdate(nextProps, nextState) {
    //     localStorage.setItem("unit", JSON.stringify(window.location.pathname.slice(9).replace(/%20/g, " ")));
    // }

    render() {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <p>These are the Skills!</p>
                            {this.state.skillsdata.map(skill => (
                                <Skills
                                    clickedSkill={this.clickedSkill}
                                    id={skill.id}
                                    title={skill.title}
                                    image={skill.image}
                                    unit={skill.unit}
                                    unitId={skill.unitId}
                                />
                            ))}
                        </div>
                    </div>
                </div>
        );
    }
}

export default SkillsOverview;