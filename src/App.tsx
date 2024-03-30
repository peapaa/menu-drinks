import React from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";

import RouteApp from "./components/RouteApp";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <RouteApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
