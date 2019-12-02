import axios from 'axios';
import { FETCH_USER } from './types';
import { type } from 'os';

export const fetchUser = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:8000/api/v1/getUser', {
            headers: {
                'Authorization': "Bearer sseyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNDIzOGVjNTc4MTVjMTg0NzJjYmY0YzAxYjBhODEzMzEyODhlMWYzN2IzZTY3NWI4MGE1OWRmOGFiYzY4YjhlOGY4MTg3NGI2YzA3ODVjNTQiLCJpYXQiOjE1NzUyNzA1OTYsIm5iZiI6MTU3NTI3MDU5NiwiZXhwIjoxNjA2ODkyOTk2LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.hnyjlGrbjTdumzXAM00InEpSNstqjTm8V_qvKUql_MUcmvYMrcKvwtSLTe6q8Ag3n-_BMNfgvg9CGGvavPjvOSo8xmFT0OJ46yxM5YYMDlR_U8eOEoBIIvyX6o4QRDMLoam_pV6JhRfCi5jvHdMwB98vBUO9-ZN3x-r62fhvH8CDkIk6RnM44QLyb55FKWQt5XUQ03371e4cCvz4bAQ32tY5NDtf12Og4BCUuACZN2OsoK5jUQZ4IXT35rgALEPdd-n8JLNT6VNyZniBXSyKc7jUUxsM_KJaq83OPOdlc60Q8vFB9_Jd-Cs8EEcbnq1EagPR2EDzJ67q2qvOy_qnv5rNFJ8ewYSA8JidrChLfyHRj1pDWFWypr-kpOuV9NlA7JdT6mAOlWoTp2vA4NFHinGAe0Un4ZsH4aCQ6jun3aa89zS0qZU6hFQWmMujPOUvPjRdTbs1B4o0BaJG7xfXdqtX5b4kl7gs5NpT7hTiDYqBQRCjTObWZgJPjTztO-PwW_JM1hAfaA7Dy3JIj33fe5hJgGsB5md0LCcVnmg0diBXPKFOwlZQYagHPmCEq1IEgriIu-bfRcvIAuKfNqBZcZIYlZtTb2DtHVwahj2NGKhVbqlYYuAi_NA_qBcmYfzTvg5BV2fe1pX5wURlZXpyF3BA5sAUPfenBjH1qKDRrBM"
            }
        });
        dispatch({ type: FETCH_USER, payload: res.data });            
    } catch (error) {
        dispatch({type: FETCH_USER, payload: ""})
    }
};