import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import NewPost from './NewPost';
import Landing from './Landing';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import '../App.css';
import {connect} from 'react-redux';
import * as actions from '../actions';


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="maindd">
                <BrowserRouter>
                    <div className="maindd">
                        {/* <body className="welcome"> */}
                            <Header />
                            <Route exact path="/" component={Landing} className="container" />
                            <Route exact path="/posts" component={NewPost} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                            {/* <Route exact path="/comments" component={Comments} /> */}
                            <Footer />

                        {/* </body> */}
                    </div>
                </BrowserRouter>
            </div>
        );
    }

}

export default connect(null,actions)(App);