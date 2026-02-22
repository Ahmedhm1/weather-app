import { useWeather } from "./weatherContext"
import { useLang, useSelectedLang } from "./langContext"
import CitiesComponent from "./citiesComponent"
import CircularProgress from '@mui/material/CircularProgress';

import "./weather.css"
import { useSelectedCity } from "./cityContext"

const degree = <sup style={{ margin: "0", padding: "0" }}>&#176;</sup>

export default function WeatherBox() {
    const [selectedLang, setSelectedLang] = useSelectedLang()
    const weather = useWeather()
    const selectedCity = useSelectedCity()[0]

    const langs = useLang()
    const lang = langs[selectedLang]

    function handleClickLangButtom() {
        setSelectedLang((selectedLang) => selectedLang === "ar" ? "en" : "ar")
    }

    return (
        <div style={{ direction: selectedLang === "ar" ? "rtl" : "ltr" }}>
            <div className="weather-box">
                <div className="header">
                    <h1>{lang.city[selectedCity]}</h1>
                    {/* <p>مايو 28 2023</p> */}
                    <p>{lang.date}</p>
                </div>
                <hr />
                <div className="body">
                    <div className="info">
                        {weather.temp ? <div className="degree-box">
                            <h2 className="degree">{weather.temp}{degree}</h2>
                            <img src={`https://openweathermap.org/payload/api/media/file/${weather.icon}.png`} alt=""></img>
                        </div> : <CircularProgress />}
                        <p className="state">{weather.description}</p>
                        <h3 className="min-max" >
                            {lang.tempMin}: {selectedLang === "ar" ? <>{degree}{weather.temp_min}</> : <>{weather.temp_min}{degree}</>}
                            <span className="separator">|</span>
                            {lang.tempMax}: {selectedLang === "ar" ? <>{degree}{weather.temp_max}</> : <>{weather.temp_max}{degree}</>}
                        </h3>
                    </div>
                    <img className="cloud" src="Cloud.png" alt=""></img>
                </div>
            </div>
            <div className="btn-group">
                <CitiesComponent />
                <button className="lang" onClick={handleClickLangButtom}>{selectedLang === "ar" ? "English" : "عربي"}</button>
            </div>
        </div>
    )
}