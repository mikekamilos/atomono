import React, { Component } from 'react';
import './Header.css';
import Navigator from '../Navigator/Navigator';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <a className="logo" href="https://www.atomono.com/"></a>
                <Navigator />
                <img className="hamburger-menu" src="https://img.icons8.com/nolan/64/menu.png"/>
                <div className="sharethis-inline-share-buttons"></div>
            </div>
        )
    }
}

export default Header
