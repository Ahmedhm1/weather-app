import { LangProvider } from "./langContext"

import WeatherBox from "./weatherBox"
import { WeatherProvider } from "./weatherContext"

export default function Weather() {

    return (
        <LangProvider>
            <WeatherProvider >
                <WeatherBox />
            </WeatherProvider>
        </LangProvider>
    )
}