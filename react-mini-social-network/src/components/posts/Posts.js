import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <div>
            Posts
            <div className="fixed-action-btn">
                <Link to="/posts/new" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link>

            </div>

        </div>
    );
};

export default Posts;