export async function getWeather() {
    try {
        const res = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current_weather=true"
        );
        if (!res.ok) return null;

        const data = await res.json();
        return {
            temperature: data.current_weather.temperature,
            windspeed: data.current_weather.windspeed,
            weathercode: data.current_weather.weathercode,
        };
    } catch (err) {
        console.error("Erreur météo :", err);
        return null;
    }
}
