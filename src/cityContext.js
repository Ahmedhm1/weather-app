import { createContext, useContext, useState } from "react"

const SelectedCityContext = createContext(0)
const CityContext = createContext({})

const citiesCoordinates = [
    { lat: 29.842214010984186, lon: 31.33334192763024 },
    { lat: 29.959710902903108, lon: 31.258657197195074 },
    { lat: 30.09562403347367, lon: 31.634920785163533 },
    { lat: 30.139134551014884, lon: 31.730719320831565 },
]

export function CityProvider({ children }) {
    const [selectedCity, setSelectedCity] = useState(0)

    return (
        <SelectedCityContext.Provider value={[selectedCity, setSelectedCity]}>
            <CityContext.Provider value={citiesCoordinates[selectedCity]}>
                {children}
            </CityContext.Provider>
        </SelectedCityContext.Provider>
    )
}

export function useSelectedCity() {
    return useContext(SelectedCityContext)
}

export function useCity() {
    return useContext(CityContext)
}