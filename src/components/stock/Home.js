import React from 'react';
import Navbar from '../Navbar';
import {Link,} from "react-router-dom";





function Stock() {


    return (


        <div>

            <Navbar />
            
            <div className="container">

            
                <div className="row">
              
                    <div className="col-md-3">
                        <div className="card-counter primary">
                            <i className="fa fa-navicon "></i>
                            <span className="count-numbers">12</span>
                            <span className="count-name">Product</span>
                        </div>
                    </div>
                   
                     
                    <div className="col-md-3">
                        <div className="card-counter danger">
                            <i className='fa fa-window-restore'></i>
                            <span className="count-numbers">599</span>
                            <span className="count-name">Store</span>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card-counter success">
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                            <span className="count-numbers">6875</span>
                            <span className="count-name">Gatagory</span>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card-counter info">
                            <i className="fa fa-users"></i>
                            <span className="count-numbers">35</span>
                            <span className="count-name">Users</span>
                        </div>
                    </div>
                </div>


            </div>




        </div>


    )
}

export default Stock;
