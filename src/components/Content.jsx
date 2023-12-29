import AlbertPhoto from "../assets/images/Photo.webp"
import VueReadingList from "../assets/images/VueReadingList.png"
import AntStorage from "../assets/images/AntStorage.png"
import BrowserHub from "../assets/images/BrowserHub.png"
import { Icon } from '@iconify/react';

function Content({translations}) {
    return (
        <main>
            <section id="home" className="home pt-[12em] pb-[8em] mx-auto lg:w-[740px] font-inter">
                <div className="grid sm:grid-cols-1 md:grid-cols-[35%_65%]">
                    <div className="photo">
                        <img
                            src={AlbertPhoto}
                            className="h-[14em] w-auto mx-auto md:float-end sm:px-4 pr-4"
                            alt="Albert"
                        />
                    </div>
                    <div className="welcome px-4 text-center md:text-left mt-8 md:mt-0">
                        <span className="bg-transparent bg-yellow-400 relative top-1 text-black font-semibold px-4 py-1 rounded">
                            {translations.AvForWork}
                        </span>

                        <h1 className="text-white text-2xl md:text-5xl font-inter font-semibold my-4">
                            👋 {translations.Hey} <span className="text-yellow-400">Albert</span>
                        </h1>

                        <p className="text-[#888585] text-lg md:text-md font-semibold">
                            <span className="text-yellow-400"> {translations.FullStackDeveloper}</span> {translations.Desc1}   
                            <br />{translations.Desc2}
                        </p>
                        <div className="icons mt-4">
                            <a href="https://www.linkedin.com/in/albert-casti%C3%B1eira-aranda/" target="_blank" rel="noreferrer" className="block md:inline-block mb-2 md:mb-0 my-0 mr-2 items-center text-white font-regular text-sm md:text-lg border-white/10 border p-2 rounded-md">
                                <Icon className="inline-block mr-1 relative -top-0.5" icon="mdi:linkedin" width="26" height="26" />
                                LinkedIn
                            </a>
                            
                            <a href="https://github.com/albertcastineira" target="_blank" rel="noreferrer"  className="block md:inline-block my-0 mr-2 items-center mb-2 md:mb-0 text-white font-regular text-sm md:text-lg border-white/10 border p-2 rounded-md">
                                <Icon className="inline-block mr-1 relative -top-0.5" icon="mdi:github" width="26" height="26" />
                                Github
                            </a>

                            <a href="mailto:albertcastiaran@gmail.com" target="_blank" rel="noreferrer"  className="block md:inline-block my-0 mr-2 items-center mb-2 md:mb-0 text-white font-regular text-sm md:text-lg border-white/10 border p-2 rounded-md">
                                <Icon className="inline-block mr-1 relative -top-0.5" icon="mdi:email" width="26" height="26" />
                                {translations.Contact}
                            </a>
                        </div>
                        


                    </div>
                </div>
            </section>

            <section id="experience" className="experience mb-[15em] mx-auto lg:w-[740px] font-inter px-4">
                <h2 className="text-white font-bold text-2xl mb-10 flex items-center">
                    <Icon className="mr-2" icon="basil:bag-outline" width="30" height="30" />
                    {translations.WorkingExperience}
                </h2>
                    
                    <ol className="relative border-s border-[#888585] ml-3">                  
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-[#888585] bg-[#888585]"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-white">{translations.Date1}</time>
                            <h3 className="text-lg font-semibold text-yellow-400">Full Stack Developer - B2Brouter</h3>
                            <p className="mb-4 text-base font-normal text-[#888585]">{translations.JobDesc1}</p>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-[#888585] bg-[#888585]"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-white">{translations.Date2}</time>
                            <h3 className="text-lg font-semibold text-yellow-400">Full Stack Developer - Databot Technologies</h3>
                            <p className="text-base font-normal text-[#888585]">{translations.JobDesc2}</p>
                        </li>
                        
                    </ol>
            </section>

            <section id="projects" className="experience mx-auto lg:w-[740px] font-inter px-4">
                <h2 className="text-white font-bold text-2xl mb-10 flex items-center">
                    <Icon className="mr-2" icon="ph:code-bold" width="30" height="30" />
                    {translations.Projects}
                </h2>

                <article className="mb-12">
                    <a href="https://github.com/ANT-Storage/react-ant-storage/" target="_blank" rel="noreferrer">
                        <h3 className="text-lg font-semibold text-yellow-400 hover:underline">
                            ANT Storage
                        </h3>
                    </a>
                    <p className="mb-4 text-sm font-normal text-[#888585]">{translations.ProjectDesc1}</p>
                    <ul className="grid grid-cols-2 md:flex gap-x-2 md:flex-row mb-2">
                        <span className="flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border border-white/10 mb-1">
                            <img className="w-3.5 h-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                            Java
                        </span>
                        <span className="flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border border-white/10 mb-1">          
                            <img className="w-3.5 h-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
                            Springboot
                        </span>
                        <span className="flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border border-white/10 mb-1">          
                            <img className="w-3.5 h-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            React JS
                        </span>
                        <span className="flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border border-white/10 mb-1">          
                            <img className="w-3.5 h-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                            Tailwind CSS
                        </span>
                        <span className="flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border border-white/10 mb-1">          
                            <img className="w-3.5 h-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                            Figma
                        </span>
                        <span className="flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border border-white/10 mb-1">          
                            <img className="w-3.5 h-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                            MySQL
                        </span>
                    </ul>
                    <a href="https://github.com/ANT-Storage/react-ant-storage/" target="_blank" rel="noreferrer">
                        <img
                            className="rounded-lg"
                            src={AntStorage} alt="" 
                        />
                    </a>
                </article>
                
                <article className="mb-12">
                    <a href="https://github.com/albertcastineira/vue-reading-list" target="_blank" rel="noreferrer">
                        <h3 className="text-lg font-semibold text-yellow-400 hover:underline">
                            Vue Reading List 
                        </h3>
                    </a>
                    <p className="mb-4 text-sm font-normal text-[#888585]">{translations.ProjectDesc2}</p>
                    <ul className="grid grid-cols-2 md:flex gap-x-2 md:flex-row mb-2">
                        <span className="flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border border-white/10 mb-1">
                            <img className="w-3.5 h-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                            VueJs
                        </span>
                        <span className="flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border border-white/10 mb-1">          
                            <img className="w-3.5 h-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                            Tailwind CSS
                        </span>
                    </ul>
                    <a href="https://vue-reading-list.vercel.app/" target="_blank" rel="noreferrer">
                        <img
                            className="rounded-lg"
                            src={VueReadingList} alt="" 
                        />
                    </a>
                </article>

                <article className="mb-12">
                    <a href="https://github.com/albertcastineira/react-browserhub/" target="_blank" rel="noreferrer">
                        <h3 className="text-lg font-semibold text-yellow-400 hover:underline">
                            BrowserHub
                        </h3>
                    </a>
                    <p className="mb-4 text-sm font-normal text-[#888585]">{translations.ProjectDesc3}</p>
                    <ul className="grid grid-cols-2 md:flex gap-x-2 md:flex-row mb-2">
                        <span className="flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border border-white/10 mb-1">
                            <img className="w-3.5 h-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            React Js
                        </span>
                        <span className="flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border border-white/10 mb-1">          
                            <img className="w-3.5 h-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                            Tailwind CSS
                        </span>
                        <span className="flex gap-x-2 rounded-full text-xs  text-white py-1 px-2 border border-white/10 mb-1">          
                            <img className="w-3.5 h-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                            Figma
                        </span>
                    </ul>
                    <a href="https://albertcastineira.github.io/react-browserhub/" target="_blank" rel="noreferrer">
                        <img
                            className="rounded-lg"
                            src={BrowserHub} alt="" 
                        />
                    </a>
                </article>
                    
            </section>
        </main>
    );
}

export default Content;
