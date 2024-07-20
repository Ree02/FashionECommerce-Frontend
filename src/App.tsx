import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Top from "./components/pages/Top.tsx";
import Login from "./components/pages/Login.tsx";

const theme = createTheme({
    palette: {
        primary: {
            main: "#889C9B",
        },
        secondary: {
            main: "#B2BEBF",
        },
        error: {
            main: "#BD2A2E",
        },
        success: {
            main: "#486966",
        },
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" Component={Top} />
                    <Route path="/login" Component={Login} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}
