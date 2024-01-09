import React, { useState } from "react";
import Overview from "./components/OverView";
import TransactionCard from "./components/TransactionCard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="md:pl-52 pt-20">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Overview />
        <TransactionCard />
      </div>
    </>
  );
};

export default App;
