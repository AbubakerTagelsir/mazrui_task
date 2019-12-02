import React from 'react';
import { Link } from 'react-router-dom';
import PostsList from './PostsList';

const Posts = () => {
    return (
        <div>
            <PostsList/>
            <div className="fixed-action-btn">
                <Link to="/posts/new" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link>

            </div>

        </div>
    );
};

export default Posts;