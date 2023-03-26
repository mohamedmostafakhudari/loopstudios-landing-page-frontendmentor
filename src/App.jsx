import { useState } from "react";
import Header from "./components/Header";
import History from "./sections/History";
import Creations from "./sections/Creations";
import Footer from "./sections/Footer";
function App() {
  return (
    <div className="App font-body">
      <Header />
      <History />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
