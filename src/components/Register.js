import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Navbar';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      lastname: null,
      email: null,
      password: null,

      formErrors: {
        name: "",
        lastname: "",
        email: "",
        password: "",

      }
    };
  }


  handelsupmit = e => {
    e.preventDefault();


    const data = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      aginpassword: this.aginpassword





    }

    axios.post('register', data).then(
      res => {
        console.log(res)
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
    if (formValid(this.state)) {
      console.log(`
              
              First Name: ${this.state.firstName}
              Last Name: ${this.state.lastName}
              Email: ${this.state.email}
              Password: ${this.state.password}
              PasswordOny:${this.state.password}
            `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name =
          value.length < 3 ? "minimum 3 harf olmasi zorunlu" : "";
        break;
      case "lastname":
        formErrors.lastname =
          value.length < 3 ? "minimum 3 harf olmasi zorunlu" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "gecersiz email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 karkterlik olmasi zorunlu" : "";
        break;

      default:
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="auth-wrapper">
            <div className="auth-inner" >


              <h3 className="text-center">Sing Up</h3>
              <div className="card-body">
                <form onSubmit={this.handelsupmit} noValidate>
                  <div className="form-group">

                    <input
                      className={formErrors.name.length > 0 ? "error" : null}
                      placeholder="name" name="name"
                      className="form-control"
                      noValidate
                      onChange={this.handleChange}

                    />
                   
                  </div>
                  <div className="form-group">

                    <input
                      className={formErrors.lastname.length > 0 ? "error" : null}
                      placeholder="last name" name="last name" className="form-control"
                      onChange={this.handleChange}

                    />
                  
                  </div>
                  <div className="form-group">

                    <input
                      className={formErrors.email.length > 0 ? "error" : null}
                      placeholder="email" name="email" className="form-control"
                      onChange={this.handleChange}

                    />
                  </div>
                  <div className="form-group">

                    <input placeholder="password" name="password" className="form-control"
                      onChange={this.handleChange}

                    />

                  </div>
                  <div className="form-group">

                    <input placeholder="agin Password" name=" agin password" className="form-control"
                      onChange={this.handleChange}

                    />
                  </div>
                  <button className="btn btn-success" onClick={this.updateUser}>Save</button>

                </form>

              </div>
            </div>
          </div>

        </div>
      </div>


    )
  }
}

