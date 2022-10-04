import React from "react";

function ListProduct(props) {

  return (
    <>
      <div className="col-md-4 mb-4">
        <div className={`card border-left-success shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div
                  className={`text-xs font-weight-bold text-success text-uppercase mb-1`}
                >
                  {props.name}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                Nombre: {props.product.name}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                 Precio: {props.product.price} 
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                 Descuento: {props.product.discount}%
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  Stock: {props.product.stock}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  <img src={props.product.image} alt="logo" width="30%" />
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
