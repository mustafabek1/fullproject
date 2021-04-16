import React from 'react'
import Navbar from '../Navbar';



function Catagory() {
    return (
        <div>
            <Navbar />
            <div className="container">


                <p>Store Information</p>



                <div class="card">
                    <div className="card-body">


                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Gatagory Name</th>
                                    <th scope="col">explanation</th>
                                    <th scope="col">Store</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bilgisayar</td>
                                    <td>Leptop</td>
                                    <td>istanbul Deposu</td>
                                   
                                </tr>
                                <tr>
                                    <td>Telefon</td>
                                    <td>iphone</td>
                                    <td>Ankara Deposu</td>
                                  
                                </tr>
                                <tr>
                                    <td>Monitor</td>
                                    <td>let</td>
                                    <td>Hatay Deposu</td>
                                   
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Catagory
