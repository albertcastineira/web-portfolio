import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

function App() {

    const [language, setLanguage] = useState('EN');
    const translations = language === 'EN' ? enTranslation : esTranslation;

    const changeLanguage = (lng) => {
        setLanguage(lng);
    };

    return (
        <>
            <Header translations={translations} onChangeLanguage={changeLanguage} currentLanguage={language} />
            <Content translations={translations} />
            <Footer translations={translations} />
            
        </>
    );
}

export default App;
