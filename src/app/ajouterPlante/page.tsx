// app/plante/page.tsx
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function AjouterPlante() {
    const [nom, setNom] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Nom de la plante:", nom);
        console.log("Type de plante:", type);
        console.log("Date de plantation:", date);
    };
    return (

        <>
        <Navbar/>
        <div className="bg-green-100 min-h-screen flex items-center justify-center py-8">

            <div className="bg-white p-8 rounded-xl shadow-xl w-96 space-y-6">
                <h1 className="text-3xl font-semibold text-center text-green-700 mb-4">
                    Ajouter une Plante 🪴
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Champ pour le nom de la plante */}
                    <div className="mb-4">
                        <label htmlFor="nom" className="block text-lg font-medium text-green-600">Nom de la
                            Plante</label>
                        <input
                            type="text"
                            id="nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            placeholder="Entrez le nom de la plante"
                            className="border-2 border-green-300 rounded-lg w-full px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Champ pour le type de plante */}

                    <div className="mb-4">
                        <label htmlFor="type" className="block text-lg font-medium text-green-600">Type de
                            Plante</label>
                        <div className="mb-4">
                            <select
                                id="plant-type"
                                className="border-2 border-green-300 rounded-lg w-full px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-400 "
                                style={{ height: '40px' }}
                            >
                                <option value="tomato">Tomate</option>
                                <option value="carrot">Carotte</option>
                                <option value="lettuce">Laitue</option>
                                <option value="pepper">Poivron</option>
                            </select>
                        </div>
                    </div>

                    {/* Champ pour la date de plantation */}
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-lg font-medium text-green-600">Date de
                            Plantation</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="border-2 border-green-300 rounded-lg w-full px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Bouton de soumission */}
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-2 px-6 rounded-lg w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Ajouter la Plante
                    </button>
                </form>
            </div>
        </div>
            </>
    );
}
