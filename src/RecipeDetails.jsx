import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

export default function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/dishes/${id}`)
        .then(response => response.json())
        .then(data => setRecipe(data));
    }, [id]);

    if (!recipe) return <div>Cargando...</div>;

    return (
        <div className="recipe-details">
        <h1>Detalles</h1>
        <h2>{recipe.name}</h2>
        <p><strong>Tipo:</strong> {recipe.type}</p>
        <p><strong>Descripción:</strong> {recipe.description}</p>
        <p><strong>Preparación:</strong> {recipe.preparation}</p>
        </div>
    );
}