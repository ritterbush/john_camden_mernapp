import React from "react";

import "./App.css";
import { DjLogo } from "@my-org/lib";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <DjLogo text='Djinndex' styles={{ marginLeft: "120px" }} />
      </header>
    </div>
  );
}

export default App;
