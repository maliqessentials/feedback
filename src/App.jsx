// eslint-disable-next-line no-unused-vars
import React from "react";
import Layout from "./Layouts/LayoutForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThankYou from "./Layouts/ThankYouPage";
import "./index.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
