import Navbar from "@/components/Navbar";

export default function SignupPage() {
    return (


        <div className="flex min-h-screen">
            <div className="w-1/3 bg-[#3D9013] flex items-center justify-center">
                <img src="/tomate.png" alt="Tomate" className="w-2/3"/>
        </div>

        <div className="flex flex-1 items-center justify-center ml-auto">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-[#3D9013] text-center">Inscription</h2>
                <p className="text-gray-500 text-center mb-4">Créez votre compte</p>

                <form className="space-y-4">
                    <input type="text" placeholder="Nom" className="w-full border p-2 rounded" />
                    <input type="text" placeholder="Prénom" className="w-full border p-2 rounded" />
                    <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                    <input type="password" placeholder="Mot de passe" className="w-full border p-2 rounded" />
                    <input type="password" placeholder="Confirmer mot de passe" className="w-full border p-2 rounded" />

                    <button className="w-full bg-[#3D9013] text-white py-2 rounded hover:bg-green-700">
                        Confirmer
                    </button>
                </form>
            </div>
        </div>
    </div>
    );
}
