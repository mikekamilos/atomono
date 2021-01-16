import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="close">&times;</div>
            </div>
        )
    }
}

export default Card
