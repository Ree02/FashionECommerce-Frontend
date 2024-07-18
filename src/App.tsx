import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Top from "./components/pages/Top.tsx";
import Login from "./components/pages/Login.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Top} />
                <Route path="/login" Component={Login} />
            </Routes>
            <Link to="/">Back To Top</Link>
        </Router>
    );
};
export default App;
