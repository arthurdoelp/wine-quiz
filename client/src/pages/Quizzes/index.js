import React, { Component } from "react";
//import UpdateForm from "../components/updateform/index";
//import Units from "../../components/Units/index";
//import unitdata from "../../units.json";
import questionsdata from "../../questions.json";
// import Skills from "../../components/Skills/index.js";

class Quizzes extends Component {
    state = {
        questionsdata,
        //showQuestionAnswer,
        questionCount: 0,
        //timer,
        // number: 30,
        correctAnswers: 0,
        wrongAnswers: 0,
        textAnswer: "",
        showResults: false,
        showFinalResults: false,
        unit: "",
        skill: ""
    }

    //This will retrieve the stored units and skills that have been clicked on from local storage and make them accessible by passing them through their own state. It is not necessary to do this, you can just
    //use the localStorage.getItem("skill") to reference the piece of data in localstorage. But for consistency and efficiency in the code I did this conversion.
    componentWillMount() {
        localStorage.getItem("unit") && this.setState({ unit: localStorage.getItem("unit") });
        localStorage.getItem("skill") && this.setState({ skill: localStorage.getItem("skill") });
    }

    //Filters the questions into displaying only the questions that are relevent to the particular skill quiz that was clicked on
    componentDidMount() {
        const questionsdata = this.state.questionsdata.filter(question => question.unit === this.state.unit && question.skill === this.state.skill);
        this.setState({ questionsdata });
        // console.log(window.location.pathname.slice(9).replace(/%20/g, " "));
        console.log(questionsdata[this.state.questionCount].question);
    }

    //These all control vaidation of if a question was answered correctly or incorrectly by comparing the users choice to the stored correct answer
    button1Clicked() {
        var buttonValue = this.state.questionsdata[this.state.questionCount].answer1;
        if (buttonValue === this.state.questionsdata[this.state.questionCount].correctAnswer) {
            this.setState({ textAnswer: "Correct!" });
            this.setState({ correctAnswers: this.state.correctAnswers + 1 });
            console.log(this.state.correctAnswers);
        } else {
            this.setState({ textAnswer: "Wrong!" });
            this.setState({ wrongAnswers: this.state.wrongAnswers + 1 });
            console.log(this.state.wrongAnswers);
        }
        this.setState({ showResults: true });
    }

    button2Clicked() {
        var buttonValue = this.state.questionsdata[this.state.questionCount].answer2;
        if (buttonValue === this.state.questionsdata[this.state.questionCount].correctAnswer) {
            this.setState({ textAnswer: "Correct!" });
            this.setState({ correctAnswers: this.state.correctAnswers + 1 });
            console.log(this.state.correctAnswers);
        } else {
            this.setState({ textAnswer: "Wrong!" });
            this.setState({ wrongAnswers: this.state.wrongAnswers + 1 });
            console.log(this.state.wrongAnswers);
        }
        this.setState({ showResults: true });
    }

    button3Clicked() {
        var buttonValue = this.state.questionsdata[this.state.questionCount].answer3;
        if (buttonValue === this.state.questionsdata[this.state.questionCount].correctAnswer) {
            this.setState({ textAnswer: "Correct!" });
            this.setState({ correctAnswers: this.state.correctAnswers + 1 });
            console.log(this.state.correctAnswers);
        } else {
            this.setState({ textAnswer: "Wrong!" });
            this.setState({ wrongAnswers: this.state.wrongAnswers + 1 });
            console.log(this.state.wrongAnswers);
        }
        this.setState({ showResults: true });
    }

    button4Clicked() {
        var buttonValue = this.state.questionsdata[this.state.questionCount].answer4;
        if (buttonValue === this.state.questionsdata[this.state.questionCount].correctAnswer) {
            this.setState({ textAnswer: "Correct!" });
            this.setState({ correctAnswers: this.state.correctAnswers + 1 });
            console.log(this.state.correctAnswers);
        } else {
            this.setState({ textAnswer: "Wrong!" });
            this.setState({ wrongAnswers: this.state.wrongAnswers + 1 });
            console.log(this.state.wrongAnswers);
        }
        this.setState({ showResults: true });
    }

    nextQuestionAnswer() {
        //Increment the questionCount by 1.
        if (this.state.questionCount < this.state.questionsdata.length - 1) {
            this.setState({ questionCount: this.state.questionCount + 1 });
            this.setState({ showResults: false });
        } else {
            this.setState({ showFinalResults: true });
            this.setState({ showResults: false });
            this.setState({ questionCount: 0 });
        }
        console.log("question count: " + this.state.questionCount);
        console.log("questionsdata length: " + this.state.questionsdata.length);
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h1>This is the Quiz</h1>
                        {/*The Q&As */}
                        <h3>{this.state.questionsdata[this.state.questionCount].question}</h3>
                        <button id="button1" className="btn btn-outline-danger btn-lg btn-block" disabled={this.state.showResults ? true : false} value={this.state.questionsdata[this.state.questionCount].answer1} onClick={() => this.button1Clicked()}>{this.state.questionsdata[this.state.questionCount].answer1}</button>
                        <button id="button2" className="btn btn-outline-danger btn-lg btn-block" disabled={this.state.showResults ? true : false} value={this.state.questionsdata[this.state.questionCount].answer2} onClick={() => this.button2Clicked()}>{this.state.questionsdata[this.state.questionCount].answer2}</button>
                        <button id="button3" className="btn btn-outline-danger btn-lg btn-block" disabled={this.state.showResults ? true : false} value={this.state.questionsdata[this.state.questionCount].answer3} onClick={() => this.button3Clicked()}>{this.state.questionsdata[this.state.questionCount].answer3}</button>
                        <button id="button4" className="btn btn-outline-danger btn-lg btn-block" disabled={this.state.showResults ? true : false} value={this.state.questionsdata[this.state.questionCount].answer4} onClick={() => this.button4Clicked()}>{this.state.questionsdata[this.state.questionCount].answer4}</button>
                        {/*The results view */}
                        {this.state.showResults ?
                            <div className="results-section">
                                <h4 className="result">{this.state.textAnswer}</h4>
                                <h6>The correct answer is: {this.state.questionsdata[this.state.questionCount].correctAnswer}{this.props.unit}</h6>
                                <button className="btn btn-outline-success btn-lg btn-block" onClick={() => this.nextQuestionAnswer()}>Next Question</button>
                            </div>
                            : null}
                        {/*The modal */}
                        {this.state.showFinalResults ?
                            <div>
                                <button type="button" className="btn btn-outline-success btn-lg" data-toggle="modal" data-target="#myModal">View Results</button>

                                <div className="modal fade" id="myModal" role="dialog">
                                    <div className="modal-dialog">

                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title">Results</h4>
                                                <a href={`/lessons/${this.state.unit}`}><button type="button" className="close">&times;</button></a>
                                            </div>
                                            <div className="modal-body">
                                                <p>These are the results</p>
                                                <h5>Correct: {this.state.correctAnswers}</h5>
                                                <h5>Wrong: {this.state.wrongAnswers}</h5>
                                            </div>
                                            <div className="modal-footer">
                                                <a href={`/lessons/${this.state.unit}`}><button type="button" className="btn btn-outline-info">Continue</button></a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Quizzes;