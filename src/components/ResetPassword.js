import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';
import Navbar from './Navbar';

export default class ResetPsasword extends Component {
    state = {};

    handelsupmit = e => {
        e.preventDefault();

        const data = {
            token: this.props.match.params.id,
            password: this.password,
            aginpassword: this.aginpassword
        }

        axios.post('rest', data).then(
            res => {
                console.log(res);
                this.setState({
                    reset: true
                });
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    render() {
        if (this.state.reset) {
            return <Redirect to={'/login'} />
        }
        return (
            <div>
                <Navbar/>
            <div className="container">
                <div className="auth-wrapper">
                    <div className="auth-inner" >

                        <h3 className="text-center">Reset Password</h3>
                        <div className="card-body">
                            <form onSubmit={this.handelsupmit}>
                                <div className="form-group">

                                    <input placeholder=" password" name="Password"
                                        className="form-control"

                                        onChange={e => this.pssword = e.target.value} />

                                </div>
                                <div className="form-group">

                                    <input placeholder="Agin password" name="Agin Password"
                                        className="form-control"

                                        onChange={e => this.pssword = e.target.value} />

                                </div>

                                <button className="btn btn-success" onClick={this.updatepassword}>Submit</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
            </div>

        )
    }
}