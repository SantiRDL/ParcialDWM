import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function App() {
	const [recipes, setRecipes] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch("http://localhost:3000/dishes")
		.then(response => response.json())
		.then(data => setRecipes(data));
	}, []);

	return (
		<div className="App">
		<h1>Recetas</h1>
		<div className="recipe-buttons">
			<button onClick={() => navigate("/agregar")}>Agregar Nueva Receta</button>
		</div>
		<div className="padding"></div>
		<div className="recipe-grid">
			{recipes.map(recipe => (
			<div key={recipe.id} className="recipe-card">
				<h2>{recipe.name}</h2>
				<div className="recipe-buttons">
				<button onClick={() => navigate(`/details/${recipe.id}`)}>Ver detalles</button>
				<button onClick={() => handleDelete(recipe.id)}>Eliminar</button>
				</div>
			</div>
			))}
		</div>
		</div>
	);

	function handleDelete(id) {
		fetch(`http://localhost:3000/dishes/${id}`, { method: "DELETE" })
		.then(() => setRecipes(recipes.filter(recipe => recipe.id !== id)));
	}
}
