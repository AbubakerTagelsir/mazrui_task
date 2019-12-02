import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';


class PostForm extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="center bold">Create New Post</h2>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))} className="post-form">
                    <FormGroup controlId="postTitle">
                        <label>Title</label>
                        <FormControl
                            autoFocus
                            type="text"
                        />
                    </FormGroup>

                    <FormGroup controlId="postBody">
                        <label>Body</label>
                        <FormControl
                            autoFocus
                            type="text"
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


export default reduxForm({
    form: 'postForm'
})(PostForm);