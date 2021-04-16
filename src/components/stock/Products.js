import React from 'react'
import Navbar from '../Navbar';
function Products() {
    return (
        <div>
            <Navbar />

            <div className="container">

                <form  >


                    <div className="form-group">

                        <input placeholder="Catagory Name" name="name" />

                    </div>
                    <div >

                        <input placeholder="Transactions" />


                    </div>

                    <div className="form-group">

                        <input placeholder="30" name="name" />

                    </div>
                    <div >

                        <input placeholder="Store" />


                    </div>

                </form>


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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>IBM M3</td>
                                    <td></td>
                                    <td>BILGISAYR</td>
                                    <td>
                                      istanbul
                                    </td>
                                </tr>
                                <tr>
                                    <td>KDV YUZDE 18 </td>
                                    <td></td>
                                    <td>Hizmet</td>
                                    <td>
                                       Hatay
                                    </td>
                                </tr>
                                <tr>
                                    <td>Laptop Batarya</td>
                                    <td></td>
                                    <td>Bilgisayar</td>
                                    <td>
                                        Ankara
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

export default Products
