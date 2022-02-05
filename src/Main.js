import React, { useEffect, useState } from "react";
import "./Main.css";
import Product from "./components/Product";
import Products from "./components/Products";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Main = () => {
  const [selectedDonut, setSelectedDonut] = useState(1);

  useEffect(() => {
    console.log(selectedDonut);
  }, [selectedDonut]);

  return (
    <Router>
      <main>
        <Products Donut={selectedDonut} />

        <Routes onChange={setSelectedDonut}>
          {selectedDonut === NaN ? (
            <Navigate replace to="/error" />
          ) : (
            <Route
              path={"/:askedDonut"}
              element={<Product onChange={setSelectedDonut} />}
            />
          )}

          <Route path="/error" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
};

export default Main;
