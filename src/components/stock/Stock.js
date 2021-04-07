import React from 'react'

function Stock() {
    return (
		<div className="container">
        <div className="row">
            <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-blue">
                    <div className="inner">
                        <h3> Prodacts </h3>
                        <p> Student Strength </p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-navicon "></i>
                    </div>
                    <a href="#" className="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-green">
                    <div className="inner">
                        <h3> Store </h3>
                        <p> Today’s Collection </p>
                    </div>
                    <div className="icon">
					<i className='fa fa-window-restore'></i>
                    </div>
                    <a href="#" className="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-orange">
                    <div className="inner">
                        <h3> Catagory </h3>
                        <p> New Admissions </p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-user-plus" aria-hidden="true"></i>
                    </div>
                    <a href="#" className="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-red">
                    <div className="inner">
                        <h3> Users </h3>
                        <p> Faculty Strength </p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-users"></i>
                    </div>
                    <a href="#" className="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Stock
