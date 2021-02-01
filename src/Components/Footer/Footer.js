import React, { Component } from 'react';
import './Footer.css';
import { Credits } from "../Credits/Credits";

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Credits />
            </div>
        )
    }
}

export default Footer
