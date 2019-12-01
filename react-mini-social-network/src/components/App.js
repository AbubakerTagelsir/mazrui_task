import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import NewPost from './NewPost';
import Landing from './Landing';
import Footer from './Footer';
import '../App.css';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="maindd">
                    <body className="welcome">
                        <Header />
                        <Route exact path="/" component={Landing} className="container" />
                        <Route exact path="/posts" component={NewPost} />
                        {/* <Route exact path="/comments" component={Comments} /> */}
                        <Footer />

                    </body>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;