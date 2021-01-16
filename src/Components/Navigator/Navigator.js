import React, { Component } from 'react';
import './Navigator.css';

export class Navigator extends Component {
    render() {
        return (
            <div className="navigator">
                <div className="nav-item">Home</div>
                <div className="nav-item">About</div>
                <div className="nav-item">Forum</div>
                <div className="nav-item">Build</div>
                <div className="nav-item">Store</div>

                <div className="hamburger-menu">___/n___/n___</div>
            </div>
        )
    }
}

export default Navigator
