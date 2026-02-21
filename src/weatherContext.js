import { createContext, useContext, useState, useEffect } from "react";
import { useSelectedLang } from "./langContext";
import axios from "axios"

const WeatherContext = createContext({})

export function WeatherProvider({ children }) {
    const [weather, setWeather] = useState({
        main: "",
        description: "",
        icon: "",
        temp: "",
        feels_like: "",
        temp_min: "",
        temp_max: "",
        pressure: "",
        city: "",
    })
    const lang = useSelectedLang()[0]

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Helwan&appid=6503845d1fa979cc8490796738d043ed&units=Metric&lang=${lang}`)
            .then((response) => {
                setWeather((weather) => {
                    return {
                        state: response.data.weather[0].main,
                        description: response.data.weather[0].description,
                        icon: response.data.weather[0].icon,
                        temp: response.data.main.temp.toFixed(1),
                        feels_like: response.data.main.feels_like.toFixed(1),
                        temp_min: response.data.main.temp_min.toFixed(1),
                        temp_max: response.data.main.temp_max.toFixed(1),
                        pressure: response.data.main.pressure,
                        city: response.data.name,
                    }
                })
            })
            .catch((error) => {
                console.log("Error happend, error details:", error)
            })
    }, [lang])

    return (
        <WeatherContext.Provider value={weather} >
            {children}
        </WeatherContext.Provider >
    )
}

export function useWeather() {
    return useContext(WeatherContext)
}