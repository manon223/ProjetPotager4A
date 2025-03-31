import Navbar from "@/components/Navbar";
import Image from 'next/image';
export default function fichePlante(){
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1 flex flex-col justify-center items-center ">
                        <div className="text-center py-6">
                            <Image src="/tomate.png" alt="Tomate" width={150} height={150} className="mx-auto" />
                            <br/>
                            <h2 className="text-2xl font-bold">Tomate</h2>
                            <br/>
                            <br/>
                        </div>

                        <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
                            <div className="bg-green-100 p-4 rounded-lg">
                                <h3 className="font-semibold text-center" >Entretien</h3>
                                <br/>
                                <p>Il faut arroser la plante une fois par jour.</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-center ">Évolution</h3>
                                <br/>
                                <p>Plantation: 8 mars 2025</p>
                                <p>Owner: 0x545...d4m7</p>
                                <p>Planter: 0x545...d4m7</p>
                                <p>Tree location: Chachapoyas, Peru</p>
                                <p>GPS: 41.40338, 2.17403</p>
                            </div>

                <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-center">Infos</h3>
                    <br/>
                    <p>Humidité: <span className="text-green-700">humide</span></p>
                    <p>Température: <span className="text-green-700">15°C</span></p>
                    <p>pH: 7</p>
                    <p>Vent: <span className="text-green-700">faible</span></p>
                    <p>Luminosité: Forte</p>
                </div>
                    </div>


            </main>
        </div>
    );
}