import React from "react";
import ReactDOM from "react-dom/client";

import Episode1 from "./Inception 01";
import Episode2 from "./Igniting-our-app 02";
import Episode3 from "./Laying-the-foundation 03";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {Episode1}
    {Episode2}
    <Episode3/>
  </React.StrictMode>
);
