import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import LastProduct from "./components/LastProduct";
import TotalesComponents from "./components/TotalesComponents";
import ListProduct from "./components/ListProduct";
import LastUser from "./components/LastUser";
import PanelCategory from "./components/PanelCategory";
import Header from "./components/Header";
import Banner from "./components/banner"


function App() {
  const [countUser, setCountUser] = useState([]);
  const [countCategory, setCountCategory] = useState([]);
  const [countProduct, setCountProduct] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [listCategory, setListCategory] = useState([]);

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

  useEffect(() => {
    fetch("http://localhost:3000/api/dashboard/listCategory")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListCategory(data.json.countByCategory);
      })
        .catch(() => {});
  }, []);

  return (
    <>
    <Header/>
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
                {
                  listCategory.map((element) => {
                    {console.log(element)}
                    return <PanelCategory name="Panel Categoria" category={element} />
                     
                  })
                }
              </div>
              <div >
              </div>
              <div> <h1>Listado de productos</h1></div>
              <div className="row-product">
                {
                  listProduct.map((element) => {
                    {console.log(element)}
                    return <div className="product"><ListProduct product={element}/></div>
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
