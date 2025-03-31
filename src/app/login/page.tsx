"use client";
import Link from "next/link";


export default function LoginPage() {
    return (
        <div className="flex min-h-screen">
            {/* Bloc de gauche avec bordure */}
            <div className="w-1/3 bg-green-700"></div>

            {/* Bloc de droite avec le formulaire */}
            <div className="flex flex-col items-center justify-center w-2/3 bg-white">
                <h2 className="text-2xl font-bold mb-4">Connexion 🌾</h2>

                {/* Formulaire */}
                <form className="bg-gray-100 p-6 rounded-lg shadow-md w-80">
                    {/* Champ Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Email :</label>
                        <input
                            type="email"
                            placeholder="exemple@email.com"
                            className="border rounded w-full px-3 py-2 mt-1"
                        />
                    </div>

                    {/* Champ Mot de passe */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Mot de passe :</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="border rounded w-full px-3 py-2 mt-1"
                        />
                    </div>
                    <div className="mb-4">
                        <Link href = "/" className=" text-green-700">Mot de passe oublié ? </Link>
                    </div>

                    {/* Bouton de connexion */}
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-2 px-4 rounded w-full hover:bg-green-700"
                    >
                        Se connecter
                    </button>
                </form>
                <br />
                <div>
                    <p>Pas de compte ?
                        <Link href = "/" className=" text-green-700"> Créer un compte</Link>
                    </p>

                </div>
            </div>
        </div>

    );
}
