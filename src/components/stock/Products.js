import React from 'react'

function Products() {
    return (
        <div className="container">
         
            <form  >


                <div className="form-group">

                    <input placeholder="Catagory Name" name="name" />

                </div>
                <div >

                    <input placeholder="Transactions"/>


                </div>
                
                <div className="form-group">

                    <input placeholder="30" name="name" />

                </div>
                <div >

                    <input placeholder="Store"/>


                </div>

            </form>
        

            <hr />






            <p >Store Information</p>


            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Store Name</th>
                        <th scope="col">Transactions</th>
                        <th scope="col">Catagory </th>
                        <th scope="col">Store</th>
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

export default Products
