import Navbar from "@/components/Navbar";
import { getWeather } from "../../lib/weather";

interface Weather {
    temperature: number;
    windspeed: number;
    weathercode: number;
    description: string;
    icon: string;
}

export default async function Home(){
    const weather = await getWeather() as Weather | null;
  return (
      <>
        <Navbar/>
        <main style={{ marginTop: '100px' }}> {/* Marge pour éviter que la navbar recouvre le titre */}

            <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
                <div className="bg-green-100 p-4 rounded-lg text-center">
                <h2 className="font-semibold">Météo</h2>
                    <div>
                        <h2>Météo à Paris :</h2>
                        {weather ? (
                            <div>
                                <div className="text-6xl mb-2">{weather.icon}</div>
                                <p>Température actuelle : {weather.temperature}°C</p>
                                <p>Vent : {weather.windspeed} km/h</p>
                                <p className="text-lg text-blue-700 mb-4">{weather.description}</p>
                                <p>{weather.weathercode === 0 ? "Ciel dégagé" : "Temps nuageux"}</p>

                                <p className="font-medium">{new Date().toLocaleTimeString()}</p>

                            </div>
                        ) : (
                            <p>Impossible de récupérer la météo.</p>
                        )}
                    </div>
                </div>

            </div>
        </main>
      </>

  )
}
