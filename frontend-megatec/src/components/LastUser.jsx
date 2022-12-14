import React, { useState } from "react";
import { useEffect } from "react";
import ('./Last.css')
function LastUser(props) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/dashboard/lastUser")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data.data[0]);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <div className="ultimo">
        <div className={`card border-left-success shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div
                  className={`text-xs font-weight-bold text-success text-uppercase mb-1`}
                >
                <h2>{props.name}</h2>
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  Nombre:   {user.name}      
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  Email: {user.email}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  <img src={user.avatar} alt="avatar" width="80" /> 
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

export default LastUser;
