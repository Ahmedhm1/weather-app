import { LangProvider } from "./langContext"
import { CityProvider } from "./cityContext"
import WeatherBox from "./weatherBox"
import { WeatherProvider } from "./weatherContext"

export default function Weather() {

    return (
        <LangProvider>
            <CityProvider>
                <WeatherProvider >
                    <WeatherBox />
                </WeatherProvider>
            </CityProvider>
        </LangProvider>
    )
}