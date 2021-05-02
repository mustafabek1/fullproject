import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar';
export default class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: '',
            explanation: '',
            catagory: '',
            store: ''
            
        }
    }
    saveUser = (e) => {
       
        e.preventDefault();
        let product = {
            id: '',
            productName: this.state.productName,
            explanation: this.state.explanation,
            catagory: this.state.catagory,
            store: this.state.store,
           
        };

        axios.post("",product)
        .then(res => {
            this.props.history.push('/')})
    }
    render() {

        return (
            <div>
                <Navbar/>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Product</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                       
                                        <input placeholder=" productName" productname="name"
                                               className="form-control"
                                               value={this.state.productName}
                                               onChange={(e) => {
                                                   this.setState({productName: e.target.value})
                                               }}/>
                                   </div>
                                   <div className="form-group">
                                        
                                        <input placeholder="Explanation" name=" explanation" className="form-control"
                                               value={this.state.explanation}
                                               onChange={(e) => {
                                                   this.setState({explanation: e.target.value})
                                               }}/>
                                    </div>
                                    <div className="form-group">
                                     
                                        <input placeholder="Catagory" name="catagory" className="form-control"
                                               value={this.state.catagory}
                                               onChange={(e) => {
                                                   this.setState({catagory: e.target.value})
                                               }}/>
                                    </div>
                                    <div className="form-group">
                                     
                                     <input placeholder="Store" name="store" className="form-control"
                                            value={this.state.store}
                                            onChange={(e) => {
                                                this.setState({store: e.target.value})
                                            }}/>
                                 </div>
                                
                                 <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
                                 <Link to="/products" className="btn btn-danger"
                                          style={{marginLeft: "10px"}}>vazgec
                                    </Link>
                              </form>
                              
                          </div> 
              </div>
              </div>
                

            </div>
        )
    }
}
