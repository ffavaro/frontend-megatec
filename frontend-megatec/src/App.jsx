import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import LastProduct from "./components/LastProduct";
import TotalesComponents from "./components/TotalesComponents";
import ListProduct from "./components/ListProduct";
import LastUser from "./components/LastUser";
import PanelCategory from "./components/PanelCategory";

function App() {
  const [countUser, setCountUser] = useState([]);
  const [countCategory, setCountCategory] = useState([]);
  const [countProduct, setCountProduct] = useState([]);
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/dashboard/product")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountProduct(data.total);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/dashboard/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountUser(data.total);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/dashboard/category")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountCategory(data.total);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/product/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListProduct(data.json.products);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <React.Fragment>
            <div className="container-fluid">
              <div className="Row">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>

              {/*<!-- Content Row Movies-->*/}
              <div className="row">
                <TotalesComponents
                  title="Total Productos"
                  data={countProduct}
                />
                <TotalesComponents title="Total Usuario" data={countUser} />
                <TotalesComponents
                  title="Total Categoria"
                  data={countCategory}
                />
              </div>

              <div className="row">
                <LastProduct name="Ultimo producto" />
                <LastUser name="Ultimo Usuario" />
                <PanelCategory name="Panel Categoria" />
              </div>
              <div className="row-product">
                <h2>Listado de productos</h2>
                {
                  listProduct.map((element) => {
                    {console.log(element)}
                    return <ListProduct product={element}/>
                  })
                }
              </div>
            </div>
          </React.Fragment>
        </div>
      </div>
    </>
  );
}

export default App;
