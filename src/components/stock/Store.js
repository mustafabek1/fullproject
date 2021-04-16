import React from 'react';
import Navbar from '../Navbar';

function Store() {
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
                                <tr>
                                    <td>Hizmet Deposu</td>
                                    <td>istanbul</td>
                                    <td>istanbul depo</td>
                                    <td>    </td>
                                </tr>
                                <tr>
                                    <td>Aankara Deposu </td>
                                    <td>Ankara</td>
                                    <td>bos</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Hatay Deposu</td>
                                    <td>Hatay</td>
                                    <td>Dolu</td>
                                    <td> </td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>






            </div>
        </div>
    )
}

export default Store
