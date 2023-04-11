import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Community from "./pages/community";
import TF13 from "./pages/tf13";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path="/tf-13-invictus" element={<TF13 data={landingPageData.TF13} />} />
        <Route path="/community" element={<Community data={landingPageData.Community} />} />
        <Route index element={<Home data={landingPageData.Home} />} />
        <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
export default App;
