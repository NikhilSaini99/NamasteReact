import React from "react";
import ReactDOM from "react-dom/client";

import Episode1 from "./Inception 01/App";
import Episode2 from "./Igniting-our-app 02/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>
    {Episode1}
    {Episode2}
    </React.StrictMode>);
