import React, { useEffect, useState } from "react";
import "./Main.css";
import Product from "./Product";
import Products from "./Products";
import Error from "./Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Main = () => {
  const [selectedDonut, setSelectedDonut] = useState(1);

  useEffect(() => {
    console.log(selectedDonut);
  }, [selectedDonut]);

  return (
    <Router onChange={setSelectedDonut}>
      <main>
        <Products Donut={selectedDonut} />

        <Routes>
          {selectedDonut === NaN ? (
            <Navigate replace to="/error" />
          ) : (
            <Route
              path={"/:askedDonut"}
              element={<Product onChange={setSelectedDonut} />}
            />
          )}

          <Route
            path="/"
            element={<Navigate replace to={`/${selectedDonut}`} />}
          />
          <Route path="/error" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
};

export default Main;
