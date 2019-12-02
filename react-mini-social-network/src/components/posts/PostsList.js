import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import { statement } from '@babel/template';

class PostsList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    renderPosts() {
        return this.props.posts.map(post => {
            return (
                <div className="card darken-1" key={post.id}>
                    <div className="card-content">
                        <span className="card-title"> {post.title}</span>
                        <p>
                            {post.body}
                        </p>
                        <p>
                            writer: <strong>{post.user_id}</strong>
                        </p>
                    </div>

                </div>
            );
        });
    }
    render() {
        return (
            <div>
                {this.renderPosts()}
            </div>
        );
    };
}

function mapStateToProps({ posts }) {
    return {
        posts
    }
}


export default connect(mapStateToProps, { fetchPosts })(PostsList);