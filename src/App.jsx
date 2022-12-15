import React from "react";
import ErrorBoundary from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";

import RouterSwitch from "./routes";
import FallbackComponent from "./components/general/FallbackComponent";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Router>
        <RouterSwitch />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
