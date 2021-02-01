import React, { Component } from 'react';
import Card from '../Card/Card';
import './Main.css';
import $ from "jquery";

export class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="content">
                    <div className="greeting">
                        <h1>Welcome!</h1>
                        <h2>Happy {currentDay}</h2>
                    </div>

                    <div className="start">
                        <button>Get Started</button>
                    </div>
                </div>
                <div className="aside">
                </div>
            </div>
        )
    }
}


// array of days of the week
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// pull current day from days[] array
const d = new Date().getDay();
const currentDay = days[d];
// array of colors of the rainbow
// const colors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082'];


export default Main
