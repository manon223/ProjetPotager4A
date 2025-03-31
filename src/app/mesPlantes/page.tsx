// 'use client'; // Si tu utilises Next.js 13 avec "app" dir

import React from 'react';
import Navbar from "@/components/Navbar";

// Exemple de données de plantes (tu peux remplacer ceci par un appel API si nécessaire)
const plants = [
    {
        id: 1,
        name: 'Tomate',
        image: '/images/tomate.jpg', // Assure-toi d'avoir une image à ce chemin
    },
    {
        id: 2,
        name: 'Carotte',
        image: '/images/carotte.jpg',
    },
    {
        id: 3,
        name: 'Laitue',
        image: '/images/laitue.jpg',
    },
    {
        id: 4,
        name: 'Poivron',
        image: '/images/poivron.jpg',
    },
];

const PlantesPage = () => {
    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-green-600 mb-6">Mes Plantes</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {plants.map((plant) => (
                    <div
                        key={plant.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <a href="/mesPlantes/fichePlante">
                            <img
                            src={plant.image}
                            alt={plant.name}
                            className="w-full h-40 object-cover"
                            />
                        </a>

                    <div className="p-4">
                            <h2 className="text-xl font-semibold text-green-700">{plant.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default PlantesPage;
