import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import express from "express";

const app = express();
const port = 3000;

ReactDOM.render(<App />, document.getElementById("root"));

app.listen(port, () => {
    console.log("Server running on port " + port +".")
});