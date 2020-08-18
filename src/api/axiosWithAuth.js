import axios from 'axios';
import axiosRetry from 'axios-retry';


export const axiosWithAuth = () => {
    debugger
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token,
        },
    });
};

export const login = (props, userCredentials, ) => {
    axiosRetry(axios, { retries: 3 })
    axios.post('endpoint/here', userCredentials)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.history.push('/dashboard');
            })
  }