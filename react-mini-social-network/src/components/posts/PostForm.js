import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { createNewPost } from '../../actions';
import { connect } from 'react-redux';


class PostForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        const postData = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.createNewPost(postData);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <h2 className="center bold">Create New Post</h2>
                <form onSubmit={this.onSubmit} className="post-form">
                    <FormGroup controlId="postTitle">
                        <label>Title</label>
                        <FormControl
                            autoFocus
                            type="text"
                            name="title"
                            onChange={this.onChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="postBody">
                        <label>Body</label>
                        <FormControl
                            autoFocus
                            type="text"
                            name="body"
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <Link to="/posts" className="red btn-flat white-text">cancel</Link>
                    <Button type="submit" className="teal btn-flat right white-text">
                        Post
                        <i className="material-icons right">done</i>
                    </Button>
                </form>

            </div>
        );
    };
}


const mapStateToProps = state => ({
    posts: state.posts,
    errors: state.errors
});

export default connect(mapStateToProps, { createNewPost })(PostForm);
