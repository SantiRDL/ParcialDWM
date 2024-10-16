import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import RecipeDetails from "./RecipeDetails";
import AddRecipe from "./AddRecipe";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/details/:id" element={<RecipeDetails />} />
            <Route path="/agregar" element={<AddRecipe />} />
        </Routes>
    </Router>
);