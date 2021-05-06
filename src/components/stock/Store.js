import React from 'react';
import { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';

class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            id: ''
        }
    }

    editStore = (store) => {
        this.props.history.push({
            pathname: `/EditProduct/{data.id}`,
            state: { data: store }
        })
    }
    deleteStore = (id) => {
        console.log("delete :", id);
        axios.delete("")
            .then(res => {
                this.props.history.push({
                    pathname: "store/",

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
    render(){
    return (
        <div>
            <Navbar />
            <div className="container">

                <p >Store Information</p>


                <div className="card">
                    <div className="card-body">


                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Store Name</th>
                                    <th scope="col">Addres</th>
                                    <th scope="col">explanation</th>
                                    <th scope="col">operation</th>
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
                                    <td>Hizmet Deposu</td>
                                    <td>istanbul</td>
                                    <td>istanbul depo</td>
                                    <td>  
                                          <button type="button" className="btn btn-dark-red btn-sm m-0 py-1 px-2 mr-1">Delet</button>
                                            <button type="button" className="btn btn-primary btn-sm m-0 py-1 px-2">Edit</button>
                                  </td>
                                </tr>
                                <tr>
                                    <td>Aankara Deposu </td>
                                    <td>Ankara</td>
                                    <td>bos</td>
                                    <td>
                                    <button type="button" className="btn btn-dark-red btn-sm m-0 py-1 px-2 mr-1">Delet</button>
                                            <button type="button" className="btn btn-primary btn-sm m-0 py-1 px-2">Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Hatay Deposu</td>
                                    <td>Hatay</td>
                                    <td>Dolu</td>
                                    <td> 
                                    <button type="button" className="btn btn-dark-red btn-sm m-0 py-1 px-2 mr-1">Delet</button>
                                            <button type="button" className="btn btn-primary btn-sm m-0 py-1 px-2">Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>






            </div>
        </div>
    )
    }
}

export default Store
