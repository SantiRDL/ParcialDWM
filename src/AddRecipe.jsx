import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function AddRecipe() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [preparation, setPreparation] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const newRecipe = { name, type, description, preparation };

        fetch("http://localhost:3000/dishes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newRecipe)
        })
            .then(() => navigate("/"));
    }

    return (
        <form onSubmit={handleSubmit} className="add-recipe-form">
            <h1>Agregar Nueva Receta</h1>
            <label>
                Nombre:
                <input value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Tipo:
                <input value={type} onChange={e => setType(e.target.value)} />
            </label>
            <label>
                Descripción:
                <textarea value={description} onChange={e => setDescription(e.target.value)} />
            </label>
            <label>
                Pasos:
                <textarea value={preparation} onChange={e => setPreparation(e.target.value)} />
            </label>
            <button type="submit">Agregar</button>
        </form>
    );
}