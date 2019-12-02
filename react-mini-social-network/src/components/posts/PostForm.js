import React, {Component} from 'react';
import {reduxForm} from 'redux-form';


class PostForm extends Component{
    render(){
        return (
            <div>
                PostForm
            </div>
        );
    };
}


export default reduxForm({
    form: 'postForm'
})(PostForm);