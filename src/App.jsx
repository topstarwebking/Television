import React, { Suspense, useState } from "react";
import { lazy } from "react";
// import Television from "./pages/Television";
// import { AllChannels } from "./Components/AllChannels";
// const Television = lazy(() => import("./pages/Television"));
import Simple from "./pages/Simple";

function App() {
  return (
    // <Suspense fallback={null}>
    //   <Television />
    // </Suspense>
    <Simple />
  );
}

export default App;
