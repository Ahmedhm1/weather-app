import { createContext, useContext, useEffect, useState } from "react"

const SelectedLangContext = createContext("")
const LangContext = createContext({})

const now = new Date()
const dateFormat = { year: 'numeric', day: 'numeric', month: 'long' }

const localSelectedLang = localStorage.getItem("lang")

export function LangProvider({ children }) {
    const [selectedLang, setSelectedLang] = useState(localSelectedLang ? localSelectedLang : "ar")

    useEffect(() => {
        localStorage.setItem("lang", selectedLang)
    }, [selectedLang])

    const lang = {
        ar: {
            tempMin: "الصغرى",
            tempMax: "الكبرى",
            date: now.toLocaleDateString('ar-EG', dateFormat),
            city: ["حلوان", "المعادي", "مدنتي", "بدر"]
        },
        en: {
            tempMin: "Min",
            tempMax: "Max",
            date: now.toLocaleDateString('en-EG', dateFormat),
            city: ["Helwan", "Maadi", "Madinaty", "Badr"]
        }
    }

    return (
        <SelectedLangContext.Provider value={[selectedLang, setSelectedLang]}>
            <LangContext.Provider value={lang}>
                {children}
            </LangContext.Provider>
        </SelectedLangContext.Provider>
    )
}

export function useSelectedLang() {
    return useContext(SelectedLangContext)
}

export function useLang() {
    return useContext(LangContext)
}