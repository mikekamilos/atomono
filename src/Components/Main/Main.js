import React, { Component } from 'react';
import Card from '../Card/Card';
import './Main.css';

export class Main extends Component {
    render() {
        return (
            <div className="main">
                <h1>Happy {currentDay}!</h1>
            </div>
        )
    }
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date().getDay();
const currentDay = days[d];

export default Main
