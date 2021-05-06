import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';



export default function Login()  {
    const [data, setData] = React.useState ({
        email:"",
        password:""

    });

    const handleChange = (prop) => e => {
        setData({...data, [prop]: e.target.value});
    };

    // handelsupmit = e => {
    //     e.preventDefault();        
    //     }



        return (
            <div>
                <Navbar />

                <div className="container">


                    <div className="auth-wrapper">
                        <div className="auth-inner" >

                            <h3 className="text-center">Login</h3>
                        
                            <div className="card-body">
                                <form onSubmit>
                                    <div className="form-group">

                                        <input
                                            placeholder="Email"
                                            name="email"
                                            className="form-control"
                                            value={data.email}
                                            onChange={handleChange ("email")}

                                        />
                                    </div>
                                    <div className="form-group">

                                        <input
                                            placeholder="Password"
                                            name="password"
                                            className="form-control"
                                            value={data.password}
                                            onChange={handleChange ("password")}

                                        />
                                    </div>
                                    <button className="btn btn-success"
                                    disabled={data.email === "" || data.password === ""}
                                     onClick={() => {
                                        
                                             localStorage.setItem("user",true);
                                             window.location.href ="/";
                                    }}
                                    >
                                      Login</button>
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