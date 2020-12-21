import React from "react";
import { hot } from "react-hot-loader";
import TodoApp from "./components/TodoApp.jsx";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <TodoApp />
        </div>
    );
}

export default hot(module)(App);