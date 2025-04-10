const getWeatherDescription = (code) => {
    const weatherCodes = {
        0: "Ciel dégagé",
        1: "Principalement dégagé",
        2: "Partiellement nuageux",
        3: "Nuageux",
        45: "Brouillard",
        48: "Brouillard givrant",
        51: "Bruine légère",
        53: "Bruine modérée",
        55: "Bruine dense",
        56: "Bruine verglaçante légère",
        57: "Bruine verglaçante dense",
        61: "Pluie légère",
        63: "Pluie modérée",
        65: "Pluie forte",
        66: "Pluie verglaçante légère",
        67: "Pluie verglaçante forte",
        71: "Neige légère",
        73: "Neige modérée",
        75: "Neige forte",
        77: "Grains de neige",
        80: "Averses de pluie légères",
        81: "Averses de pluie modérées",
        82: "Averses de pluie violentes",
        85: "Averses de neige légères",
        86: "Averses de neige fortes",
        95: "Orage",
        96: "Orage avec grêle légère",
        99: "Orage avec grêle forte"
    };

    return weatherCodes[code] || "Données météo indisponibles";
};
const getWeatherIcon = (code) => {
    // Association simple de codes météo aux emojis
    if (code === 0) return "☀️";
    if (code === 1) return "🌤️";
    if (code === 2) return "⛅";
    if (code === 3) return "☁️";
    if (code >= 45 && code <= 48) return "🌫️";
    if (code >= 51 && code <= 57) return "🌧️";
    if (code >= 61 && code <= 67) return "🌧️";
    if (code >= 71 && code <= 77) return "❄️";
    if (code >= 80 && code <= 82) return "🌦️";
    if (code >= 85 && code <= 86) return "🌨️";
    if (code >= 95) return "⛈️";

    return "❓";
};




export async function getWeather() {
    try {
        const latitude = 48.8013;
        const longitude = 2.3428;

        const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        if (!res.ok) return null;

        const data = await res.json();
        return {
            temperature: data.current_weather.temperature,
            windspeed: data.current_weather.windspeed,
            weathercode: data.current_weather.weathercode,
            description: getWeatherDescription(data.current_weather.weathercode),
            icon: getWeatherIcon(data.current_weather.weathercode)
        };
    } catch (err) {
        console.error("Erreur météo :", err);
        return null;
    }
}
