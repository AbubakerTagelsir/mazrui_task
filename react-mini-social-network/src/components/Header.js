import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (<span><li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li></span>);
            default:
                return (
                    <li><a href="/posts/new">New Post</a></li>);
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Social Network</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/posts">All Posts</a></li>

                        {this.renderContent()}
                    </ul>
                </div>
            </nav>

        );
    };
}

function mapStateToProps({ auth }) {
    return {
        auth
    };
}
export default connect(mapStateToProps)(Header);