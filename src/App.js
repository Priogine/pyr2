import React from "react";
import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// ----- components import -----
import Dapp from "./components/dapp";
// import Home from "./components/home";
// ----- layout import -----
import Loader from "./layout/loader";
import ScrollToTop from "./layout/scroll-to-top";
import { Web3ContextProvider } from "./context/Web3Context";
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Web3ContextProvider>
        <Loader />
        <ScrollToTop />
        <Routes>
          <Route path="" element={<Dapp />} />
          {/* <Route path="dapp" element={<Dapp />} /> */}
        </Routes>
      </Web3ContextProvider>
    </BrowserRouter>
  );
};

export default App;
