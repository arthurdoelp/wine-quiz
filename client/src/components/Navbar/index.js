import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div>
            <ul>
                <li><a href="/">Wine Quiz</a></li>
                <li><a href="/lessons">Home</a></li>
                <li><a href="/lessons">Lessons</a></li>
                <li><a href="/practice">Practice</a></li>
                <li><a className="settings-btn" href="/settings">Settings</a></li>
            </ul>
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="dkd">Wine Quiz</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="dkdjkd">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/lessons">Lessons</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="jhdjdh">Practice</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="jhdjdh">Account</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
        </div>
    );
}

export default Navbar;
