import React from "react";
import "./TotalesComponents.css"
function TotalesComponents(props) {
  return (
    <>
      <React.Fragment>
        <div className="contenedor">
          <div className={`card border-left-success shadow h-100 py-2`}>
            <div className="card-body">
              <div className="hijo">
                <div className="col mr-2">
                  <div
                    className={`text-xs font-weight-bold text-success text-uppercase mb-1`}
                  >
                    <h2>{props.title}</h2>
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {props.data}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}

export default TotalesComponents;
