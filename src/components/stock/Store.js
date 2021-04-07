import React from 'react';


function Store() {
    return (
        <div className="container">
         
            <p >Store Information</p>

            
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Store Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">explanation </th>
                        <th scope="col">transactions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Hizmet Deposu</th>
                        <td>istanbul</td>
                        <td>depo dolu</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Bilgisayar Donanim </th>
                        <td>istanbul</td>
                        <td>istanbul depo</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Ankara</th>
                        <td>Ankara Deposu</td>
                        <td>BOS</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>







        </div>
    )
}

export default Store
