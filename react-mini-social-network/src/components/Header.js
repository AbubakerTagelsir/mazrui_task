import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Social Network</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/posts">All Posts</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </div>
            </nav>

        );
    };
}


export default Header;