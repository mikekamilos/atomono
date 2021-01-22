import React, { Component } from 'react';
import './Header.css';
import Navigator from '../Navigator/Navigator';

export class Header extends Component {
    render() {
        return (
            <div className="header">
            <a className="logo" href="https://www.atomono.com/"></a>
                <Navigator />
                <div className="sharethis-inline-share-buttons"></div>
            </div>
        )
    }
}

export default Header
