import React, { Fragment } from "react";
import NavBar from "../layout/NavBar";
import SideBar from "../layout/SideBar";
import Products from "../products/Products";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="has-background-light">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-3">
                <div className="box">
                  <SideBar />
                </div>
              </div>
              <div className="column is-9">
                <Products />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
