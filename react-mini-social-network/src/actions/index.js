import axios from 'axios';
import { FETCH_USER, FETCH_POSTS, LOGIN_USER, REGISTER_USER, SET_CURRENT_USER } from './types';
import { type } from 'os';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';


// get the current user
export const fetchUser = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:8000/api/getUser');
        dispatch({ type: FETCH_USER, payload: res.data });            
    } catch (error) {
        dispatch({type: FETCH_USER, payload: ""})
    }
};

// get all posts
export const fetchPosts = () => async dispatch => {
    const res = await axios.get('http://localhost:8000/api/posts');
    console.log(res)
    dispatch({type: FETCH_POSTS, payload: res.data});
};

// login user 
export const loginUser = loginData => async dispatch => {
    const res = await axios.post('https://localhost:8000/api/login', loginData);
    console.log(res);
    const { token } = res.data;

    localStorage.setItem('jwtToken', token);

    setAuthToken(token);

    const decoded = jwt_decode(token);

    dispatch(setCurrentUser(decoded));

}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// register user 
export const registerUser = (userData, history) => async dispatch => {
    const res = await axios.post('https://localhost:8000/api/register', userData);
    console.log(res);
    history.push('/login');
}


// logout user

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}


// create new post
export const createNewPost = postData => async dispatch => {
    const res = await axios.post('/api/posts/new', postData);
    console.log(res);

};