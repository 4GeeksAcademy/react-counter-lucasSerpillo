//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./component/Counter.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Counter.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Counter/>);

