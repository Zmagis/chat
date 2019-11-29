import React from "react";

import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";

// import "./App.css";
import "./styles/style.css";

function App() {
  return (
    <div id="container">
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="main">
        <MessagesList />
        <AddMessage />
      </div>
    </div>
  );
}

export default App;
