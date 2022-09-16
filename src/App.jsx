import React, { Suspense, useState } from "react";
import { lazy } from "react";
// import Television from "./pages/Television";
// import { AllChannels } from "./Components/AllChannels";
const Television = lazy(() => import("./pages/Television"));

function App() {
  return (
    <Suspense fallback={null}>
      <Television />
    </Suspense>
  );
}

export default App;
