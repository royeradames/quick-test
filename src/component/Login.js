import React, { useState } from 'react'
import { axiosWithAuth } from '../api/axiosWithAuth'

const Login = () => {
    const [credentials, setCredentials] = useState({})

    const login = e => {
        e.preventDefault()
        axiosWithAuth().post('login/endpoint', credentials)
            .then(resp => {
                localStorage.setItem('token', resp.data.token)
                this.PaymentResponse.history.push('/')
            })
    }
//this part was broken on the TK
    const handleChange = e => {
        setCredentials({
            ...credentials,
            credentials: {
                [e.target.name]: e.target.value,
            }
        })
    }

    return (
        <div>
            <form onSubmit={this.login}>
                <input 
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={this.handleChange}

                />
                <input 
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={this.handleChange}
                />

                <button type='submit'>Log in</button>

            </form>
        </div>
    )
}

export default Login
