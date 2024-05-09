import React from "react";
import App from "./App";
import QuemSomos from "./QuemSomos/QuemSomos";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/quemsomos" element={<QuemSomos/>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes;