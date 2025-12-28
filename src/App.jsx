import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import CoinPage from "./pages/Coin";
import ComparePage from "./pages/ComparePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/coin/:id" element={<CoinPage />}></Route>
          <Route path="/compare" element={<ComparePage />}></Route>
          {/* <Route path="/watchlist" element={<WatchlistPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
