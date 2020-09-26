import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
const App = () => {
  return (
    <div className="App">
      <Header />
      <AppBody />
      <Footer />
    </div>
  );
};

export default App;
