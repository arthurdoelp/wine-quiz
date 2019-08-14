import React, { Component } from "react";
//import UpdateForm from "../components/updateform/index";
//import Units from "../../components/Units/index";
//import unitdata from "../../units.json";
import questionsdata from "../../questions.json";
import "./style.css";
// import Skills from "../../components/Skills/index.js";

class Quizzes extends Component {
    state = {
        questionsdata,
        questionCount: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        textAnswer: "",
        showResults: false,
        showFinalResults: false,
        unit: "",
        skill: "",
        answerResult: "",
        answer: "",
        showContinue: false,
        toggleCheck: true
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

    showContinueBtn() {
        this.setState({ showContinue: true });
    }

    //only once the "check" button is clicked

    check() {
        if (this.state.answer === this.state.questionsdata[this.state.questionCount].correctAnswer) {
            this.setState({ answerResult: "correct" });
        } else if (this.state.answer !== this.state.questionsdata[this.state.questionCount].correctAnswer) {
            this.setState({ answerResult: "wrong" });
        } else if (this.state.answer === "") {
            this.setState({ answerResult: "no-input" });
        }
        this.showContinueBtn();
    }

    //These all control vaidation of if a question was answered correctly or incorrectly by comparing the users choice to the stored correct answer
    button1Clicked() {
        this.setState({ answer: this.state.questionsdata[this.state.questionCount].answer1 });
        this.setState({ toggleCheck: false });
        // var buttonValue = this.state.questionsdata[this.state.questionCount].answer1;
        // if (buttonValue === this.state.questionsdata[this.state.questionCount].correctAnswer) {
        //     this.setState({ textAnswer: "correct!" });
        //     this.setState({ answerResult: true });
        //     this.setState({ correctAnswers: this.state.correctAnswers + 1 });
        //     console.log(this.state.correctAnswers);
        // } else {
        //     this.setState({ textAnswer: "wrong!" });
        //     this.setState({ answerResult: false });
        //     this.setState({ wrongAnswers: this.state.wrongAnswers + 1 });
        //     console.log(this.state.wrongAnswers);
        // }
        // this.setState({ showResults: true });
    }

    button2Clicked() {
        this.setState({ answer: this.state.questionsdata[this.state.questionCount].answer2 });
        this.setState({ toggleCheck: false });
        // var buttonValue = this.state.questionsdata[this.state.questionCount].answer2;
        // if (buttonValue === this.state.questionsdata[this.state.questionCount].correctAnswer) {
        //     this.setState({ textAnswer: "correct!" });
        //     this.setState({ answerResult: true });
        //     this.setState({ correctAnswers: this.state.correctAnswers + 1 });
        //     console.log(this.state.correctAnswers);
        // } else {
        //     this.setState({ textAnswer: "wrong!" });
        //     this.setState({ answerResult: false });
        //     this.setState({ wrongAnswers: this.state.wrongAnswers + 1 });
        //     console.log(this.state.wrongAnswers);
        // }
        // this.setState({ showResults: true });
    }

    button3Clicked() {
        this.setState({ answer: this.state.questionsdata[this.state.questionCount].answer3 });
        this.setState({ toggleCheck: false });
        // var buttonValue = this.state.questionsdata[this.state.questionCount].answer3;
        // if (buttonValue === this.state.questionsdata[this.state.questionCount].correctAnswer) {
        //     this.setState({ textAnswer: "correct!" });
        //     this.setState({ answerResult: true });
        //     this.setState({ correctAnswers: this.state.correctAnswers + 1 });
        //     console.log(this.state.correctAnswers);
        // } else {
        //     this.setState({ textAnswer: "wrong!" });
        //     this.setState({ answerResult: false });
        //     this.setState({ wrongAnswers: this.state.wrongAnswers + 1 });
        //     console.log(this.state.wrongAnswers);
        // }
        // this.setState({ showResults: true });
    }

    button4Clicked() {
        this.setState({ answer: this.state.questionsdata[this.state.questionCount].answer4 });
        this.setState({ toggleCheck: false });
        // var buttonValue = this.state.questionsdata[this.state.questionCount].answer4;
        // if (buttonValue === this.state.questionsdata[this.state.questionCount].correctAnswer) {
        //     this.setState({ textAnswer: "correct!" });
        //     this.setState({ answerResult: true });
        //     this.setState({ correctAnswers: this.state.correctAnswers + 1 });
        //     console.log(this.state.correctAnswers);
        // } else {
        //     this.setState({ textAnswer: "wrong!" });
        //     this.setState({ answerResult: false });
        //     this.setState({ wrongAnswers: this.state.wrongAnswers + 1 });
        //     console.log(this.state.wrongAnswers);
        // }
        // this.setState({ showResults: true });
    }

    nextQuestionAnswer() {
        //Increment the questionCount by 1.
        this.setState({ answer: "" });
        this.setState({ answerResult: "" });
        this.setState({ showContinue: false });
        this.setState({ toggleCheck: true });
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
        let progressBar = {
            width: (this.state.questionCount / (this.state.questionsdata.length)) * 1000
        }
        let progressReflection = {
            width: progressBar - 50
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-1 col-md-1 col-lg-1">
                        <a href={`/lessons/${this.state.unit}`}><span id="close-quiz">&times;</span></a>
                        </div>
                        <div className="col-sm-11 col-md-11 col-lg-11">
                            <div id="progress-bar-container">
                                <div id="progress-bar" style={progressBar}>
                                    <div id="progress-reflection" style={progressReflection}></div>
                                </div>
                            </div>
                            <div className="question-header">
                                <h2>Mark the correct answer</h2>
                                {/*The Q&As */}
                                <h7>{this.state.questionsdata[this.state.questionCount].question}</h7>
                            </div>
                            <div className="button-section">
                                <button id="button1" className="custom-btn" disabled={this.state.showResults ? true : false} value={this.state.questionsdata[this.state.questionCount].answer1} onClick={() => this.button1Clicked()}><span>1</span>{this.state.questionsdata[this.state.questionCount].answer1}</button>
                                <button id="button2" className="custom-btn" disabled={this.state.showResults ? true : false} value={this.state.questionsdata[this.state.questionCount].answer2} onClick={() => this.button2Clicked()}><span>2</span>{this.state.questionsdata[this.state.questionCount].answer2}</button>
                                <button id="button3" className="custom-btn" disabled={this.state.showResults ? true : false} value={this.state.questionsdata[this.state.questionCount].answer3} onClick={() => this.button3Clicked()}><span>3</span>{this.state.questionsdata[this.state.questionCount].answer3}</button>
                                <button id="button4" className="custom-btn" disabled={this.state.showResults ? true : false} value={this.state.questionsdata[this.state.questionCount].answer4} onClick={() => this.button4Clicked()}><span>4</span>{this.state.questionsdata[this.state.questionCount].answer4}</button>
                            </div>
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
                {/*The results view */}
                <div className={`results-section-${this.state.answerResult}`}>
                    <footer>
                        {this.state.showContinue ?
                            <div>
                                <h4 className="result">You are {this.state.answerResult}!</h4>
                                <h6 className="result-message">The correct answer is: {this.state.questionsdata[this.state.questionCount].correctAnswer}{this.props.unit}</h6>
                                <button className="next-question-btn" onClick={() => this.nextQuestionAnswer()}>NEXT QUESTION</button>
                            </div>
                            :
                            <button className={this.state.toggleCheck ? "check-btn-disabled" : "check-btn"} onClick={() => this.check()} disabled={this.state.toggleCheck}>CHECK</button>
                        }
                    </footer>
                </div>
            </div>
        );
    }
}

export default Quizzes;