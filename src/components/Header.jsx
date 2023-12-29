import LanguageSwitch from "./LanguageSwitch.jsx";

function Header({translations, onChangeLanguage, currentLanguage}) {

    return (
        <header className="max-w-5xl text-white mx-auto p-4">
            <nav className="font-inter text-center mx-auto mt-2">
                <a 
                    href="#experience"
                    className="mx-3 md:mx-4 font-semibold"
                >
                    {translations.Experience}
                </a>

                <a 
                    href="#projects"
                    className="mx-3 md:mx-4 font-semibold"
                >
                    {translations.Projects}
                </a>

                <LanguageSwitch onChangeLanguage={onChangeLanguage} currentLanguage={currentLanguage}/>
            </nav>
        </header>
    )
}

export default Header
