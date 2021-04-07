import React, { Component } from 'react'
import axios from 'axios';

export default class ResetPassword extends Component {

handelsupmit = e => {
    e.preventDefaulte();

    const data = {
        email: this.email
    };

    axios.post('forgot',data).then(
        res => {
            console.log(res)
        }
    ).catch(
        err =>{
            console.log(err);
        }
    )

};






    render() {
        return (
            <div className="container">
                 <div className="auth-wrapper">
                 <div className="auth-inner" >

               
            <h3 className="text-center">Forget Password</h3>
            <div className="card-body">
                <form onSubmit={this.handelsupmit}>
                    <div className="form-group">
                       
                        <input placeholder="Email" name="email"
                               className="form-control"
                             
                               onChange={e => this.email = e.target.value}  />
                              
                   </div>
                  
                    <button className="btn btn-success" onClick={this.updateUser}>      Get</button>
                   
                    </form>

                    </div>
                    </div>
                    </div>
                    </div>

        )
    }
}