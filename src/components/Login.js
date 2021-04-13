import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';



export default class Login extends Component {
    state = {};

    handelsupmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        }

        axios.post('login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.setState({
                    loggedIn: true
                });
                this.props.setUser(res.data.user);
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {


        return (
            <div>
                <Navbar />

                <div className="container">


                    <div className="auth-wrapper">
                        <div className="auth-inner" >


                            <h3 className="text-center">Login</h3>
                            <div className="card-body">
                                <form onSubmit={this.handelsupmit}>
                                    <div className="form-group">

                                        <input
                                            placeholder="Email"
                                            name="email"
                                            className="form-control"
                                            onChange={this.handleChange}

                                        />
                                    </div>
                                    <div className="form-group">

                                        <input
                                            placeholder="Password"
                                            name="password"
                                            className="form-control"
                                            onChange={this.handleChange}

                                        />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateUser}>Login</button>
                                    <p className="forgot-password texet-right">
                                        <Link to={'/forgot'}>Forgot Password</Link>
                                    </p>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}