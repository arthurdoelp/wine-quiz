import React, { Component } from "react";
import "./style.css";
import Footer from "../../components/Footer/index";
// import Navbar from "../../components/Navbar/index";

class HomePage extends Component {
    render() {
        return (
            <div>
                <div>
                    <ul className="headingNav">
                        <li><a className="navbar-brand" href="/"><img src="./../../images/Usommelier-logo2.svg" height="40" alt=""></img></a></li>
                        <li><a href="/lessons">Get Started</a></li>
                    </ul>
                </div>
                <div id="carouselExampleControls" className="carousel slide heroBanner" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="banner-image carousel-item active">
                            <img src="./../../images/Usommelier-main-background.svg" className="d-block w-100" alt="..."></img>
                            <div className="banner-overlay">
                                <h3 className="overlay-text">An interactive learning experience designed to improve your wine knowledge and awareness</h3>
                                <a href="/lessons"><button className="started-btn">Get Started</button></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./../../images/Enhance-knowledge-banner.svg" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="./../../images/Expand-geography-banner.svg" className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="row step-section">
                    <div className="step-list col-lg-6">
                        <ol>
                            <li><span id="bullet-1">1</span>Learn the History</li>
                            <li><span id="bullet-2">2</span>Acquire the flavor</li>
                            <li><span id="bullet-3">3</span>Boost your wine confidence</li>
                        </ol>
                    </div>
                    <div className="col-lg-6">
                        <img src="./../../images/Level-up-image.png" width="100%" height="auto"></img>
                    </div>
                </div>

                <div className="description">
                    <h1>What is USommelier?</h1>
                    <h4>USommelier is an easy way to learn wine knowledge. Practice wine history, geographical wine regions, pronunciations and the opportunity to purchase wines you haven't tried before</h4>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <img src="./../../images/Under-construction-image.png" width="100%" height="auto"></img>
                    </div>
                    <div className="col-lg-6 Under-construction-text">
                        <h3>Under Development</h3>
                        <h4>We are still working hard a developing the app, but we have an early version out now for you to try out!</h4>
                        <button className="under-const-btn">Get Started</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <form className="contact-form was-validated" action="https://formspree.io/arthur@arthurdoelp.com" method="POST">
                            <h3>Send Feedback</h3>
                            <h4>Any feedback is greatly appreciated</h4>
                            <div className="contact-form-questions">
                                <div class="form-group">
                                    <label for="input-name">Name</label>
                                    <input type="text" class="form-control" id="input-name" placeholder="Enter name" name="name" required></input>
                                    <div class="invalid-feedback">
                                        Please add your name
                                    </div>
                                    <div class="valid-feedback">
                                        Thanks!
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="input-email">Email address</label>
                                    <input type="email" class="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Enter email" name="email" required></input>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    <div class="invalid-feedback">
                                        Please add your email
                                    </div>
                                    <div class="valid-feedback">
                                        Thanks!
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="message-input">Message</label>
                                    <textarea class="form-control" id="message-input" rows="3" placeholder="Enter message or any feedback" name="message" required></textarea>
                                    <div class="invalid-feedback">
                                        Please add your message
                                    </div>
                                    <div class="valid-feedback">
                                        Thanks!
                                    </div>
                                </div>
                                <button type="submit" class="contact-submit-btn" value="Send">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default HomePage;
