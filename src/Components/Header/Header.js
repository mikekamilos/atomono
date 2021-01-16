import React, { Component } from 'react';
import './Header.css';
import Navigator from '../Navigator/Navigator';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo"></div>
                <Navigator />
                <div className="sharethis-inline-share-buttons"></div>
            </div>
        )
    }
}

export default Header
