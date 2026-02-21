import { useWeather } from "./weatherContext"
import { useLang, useSelectedLang } from "./langContext"
import "./weather.css"

const degree = <sup style={{margin: "0", padding: "0"}}>&#176;</sup>

export default function WeatherBox() {
    const weather = useWeather()
    const [selectedLang, setSelectedLang] = useSelectedLang()
    const lang = useLang()

    function handleClickLangButtom() {
        setSelectedLang((selectedLang) => selectedLang === "ar" ? "en" : "ar")
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "end", direction: selectedLang === "ar" ? "rtl" : "ltr" }}>
            <div className="weather-box">
                <div className="header">
                    <h1>{weather.city}</h1>
                    {/* <p>مايو 28 2023</p> */}
                    <p>{lang.date}</p>
                </div>
                <hr />
                <div className="body">
                    <div className="info">
                        <div className="degree-box">
                            <h2 className="degree">{weather.temp}<sup>&#176;</sup></h2>
                            <img src={`https://openweathermap.org/payload/api/media/file/${weather.icon}.png`} alt=""></img>
                        </div>
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
            <button className="lang" onClick={handleClickLangButtom}>{selectedLang === "ar" ? "English" : "عربي"}</button>
        </div>
    )
}