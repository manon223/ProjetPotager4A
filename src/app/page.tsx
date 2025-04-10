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
        <main style={{ marginTop: '100px' }} className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Bienvenue à Cachan</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">Météo locale</h2>

                    {weather ? (
                        <div className="flex flex-col items-center">
                            <div className="text-6xl mb-2">{weather.icon}</div>
                            <h3 className="text-xl font-medium mb-2">Cachan</h3>
                            <p className="text-3xl font-bold mb-1">{weather.temperature}°C</p>
                            <p className="text-lg text-blue-700 mb-4">{weather.description}</p>

                            <div className="grid grid-cols-2 gap-4 w-full mt-2">
                                <div className="bg-white bg-opacity-60 p-3 rounded-md">
                                    <p className="text-sm text-gray-600">Vent</p>
                                    <p className="font-medium">{weather.windspeed} km/h</p>
                                </div>
                                <div className="bg-white bg-opacity-60 p-3 rounded-md">
                                    <p className="text-sm text-gray-600">Mise à jour</p>
                                    <p className="font-medium">{new Date().toLocaleTimeString()}</p>
                                </div>
                            </div>
                        </div>

                        ) : (
                            <p>Impossible de récupérer la météo.</p>
                        )}
                    </div>
                </div>


        </main>
      </>

  )
}
