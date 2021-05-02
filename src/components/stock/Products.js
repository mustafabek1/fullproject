import React from 'react'
import { Component } from 'react';
import Navbar from '../Navbar';
import { Link } from "react-router-dom";
import axios from 'axios';
class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            id: ''
        }
    }

    editProduct = (product) => {
        this.props.history.push({
            pathname: `/EditProduct/{data.id}`,
            state: { data: product }
        })
    }
    deleteProduct = (id) => {
        console.log("delete :", id);
        axios.delete("")
            .then(res => {
                this.props.history.push({
                    pathname: "/",

                })
            });
    }




    componentDidMount() {
        axios.get("")
            .then((res) => {
                this.setState({ data: res.data });
                console.log("data", res.data);
            });
    }



    render() {
        return (
            <div>
                <Navbar />

                <div className="container">


                    <hr />

                    <p >Store Information</p>



                    <div className="card">
                        <div className="card-body">


                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">explanation</th>
                                        <th scope="col">Catagory</th>
                                        <th scope="col">Store</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map(product => {
                                        return (
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.productName}</td>
                                                <td>{product.explanation}</td>
                                                <td>{product.catagory}</td>
                                                <td>{product.store}</td>
                                                <td>



                                                    <button onClick={(e) => this.editProduct(product)}
                                                        className="btn btn-success"> Edit
                                                    </button>


                                                    <button onClick={(e) => this.deleteProduct(product.id)}
                                                        className="btn btn-danger" > Delete
                                                    </button>




                                                </td>
                                            </tr>

                                        )
                                    })}
                                    <tr>
                                        <td>IBM M3</td>
                                        <td></td>
                                        <td>BILGISAYR</td>
                                        <td>
                                            istanbul
                                    </td>
                                        <td>
                                            {/* <button type="button" className="btn btn-dark-red btn-sm m-0 py-1 px-2 mr-1">Delet</button>
                                            <button type="button" className="btn btn-primary btn-sm m-0 py-1 px-2">Edit</button> */}
                                            <Link to="/editProduct" className="btn btn-success"
                                                style={{ marginLeft: "10px" }}>Edit
                                            </Link>
                                            <Link to="/addProduct" className="btn btn-success"
                                                style={{ marginLeft: "10px" }}>Delet
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>KDV YUZDE 18 </td>
                                        <td></td>
                                        <td>Hizmet</td>
                                        <td>
                                            Hatay
                                    </td>
                                        <td>
                                            {/* <button type="button" className="btn btn-dark-red btn-sm m-0 py-1 px-2 mr-1">Delet</button>
                                            <button type="button" className="btn btn-primary btn-sm m-0 py-1 px-2">Edit</button> */}
                                            <Link to="/editProduct" className="btn btn-success"
                                                style={{ marginLeft: "10px" }}>Edit
                                            </Link>
                                            <Link to="/addProduct" className="btn btn-success"
                                                style={{ marginLeft: "10px" }}>Delet
                                            </Link>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Laptop Batarya</td>
                                        <td></td>
                                        <td>Bilgisayar</td>
                                        <td>
                                            Ankara
                                    </td>
                                        <td>
                                            {/* <button type="button" className="btn btn-dark-red btn-sm m-0 py-1 px-2 mr-1">Delet</button>
                                            <button type="button" className="btn btn-primary btn-sm m-0 py-1 px-2">Edit</button> */}
                                            <Link to="/editProduct" className="btn btn-success"
                                                style={{ marginLeft: "10px" }}>Edit
                                            </Link>
                                            <Link to="/addProduct" className="btn btn-success"
                                                style={{ marginLeft: "10px" }}>Delet
                                            </Link>



                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>

                    </div>
                    <Link to="/addProduct" className="btn btn-success"
                        style={{ marginLeft: "10px" }}>Add Product
                    </Link>






                </div>


            </div>
        )
    }
}

export default Products
