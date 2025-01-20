import VueReadingList from "../assets/images/VueReadingList.png"
import AntStorage from "../assets/images/AntStorage.png"
import BrowserHub from "../assets/images/BrowserHub.png"
import BrowserHub2 from "../assets/images/BrowserHub2.png"
import { Icon } from '@iconify/react';
import Job from "./Job";
import Project from "./Project";
import TechnologyChip from "./TechnologyChip";
import Profile from "./Profile"

function Content({translations}) {
    return (
        <main>
            <section id="home" className="home pt-[5em] pb-[8em] mx-auto lg:w-[740px] font-inter">
                <Profile translations={translations} />
            </section>

            <section id="experience" className="experience mb-[15em] mx-auto lg:w-[740px] font-inter px-4">
                <h2 className="text-white font-bold text-2xl mb-10 flex items-center">
                    <Icon className="mr-2" icon="basil:bag-outline" width="30" height="30" />
                    {translations.WorkingExperience}
                </h2>
                    
                    <ol className="relative border-s border-[#888585] ml-3">
                        <li className="mb-10 ms-4">
                            <Job 
                                time={translations.Date3} 
                                jobTitle={"Software Developer - SopraSteria"}
                                description={translations.JobDesc3} 
                            />
                        </li>                
                        <li className="mb-10 ms-4">
                            <Job 
                                time={translations.Date1} 
                                jobTitle={"Full Stack Developer - b2brouter"}
                                description={translations.JobDesc1} 
                            />

                        </li>
                        <li className="mb-10 ms-4">
                            <Job 
                                time={translations.Date2} 
                                jobTitle={"Full Stack Developer - Databot Technologies"}
                                description={translations.JobDesc2} 
                            />
                        </li>
                        
                    </ol>
            </section>

            <section id="projects" className="experience mx-auto lg:w-[740px] font-inter px-4">
                <h2 className="text-white font-bold text-2xl mb-10 flex items-center">
                    <Icon className="mr-2" icon="ph:code-bold" width="30" height="30" />
                    {translations.Projects}
                </h2>

                <Project 
                    title={"BrowserHub"}
                    link={"https://browserhub.vercel.app/"}
                    description={translations.ProjectDesc4}
                    chips={
                    <>
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} name={"ReactJS"} />
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-plain.svg"} name={"MaterialUI"} />
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"} name={"Figma"} />
                    </>
                    }
                />
                <a href="https://browserhub.vercel.app/" target="_blank" rel="noreferrer">
                    <img
                        className="rounded-lg"
                        src={BrowserHub2} alt="" 
                    />
                </a>

                <Project 
                    title={"ANT Storage"}
                    description={translations.ProjectDesc1}
                    chips={
                    <>
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"} name={"Java"} />
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"} name={"SpringBoot"} />
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} name={"ReactJS"} />
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"} name={"TailwindCSS"} />
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"} name={"Figma"} />
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"} name={"MySQL"} />
                    </>
                    }
                />
                <a href="https://github.com/ANT-Storage/react-ant-storage/" target="_blank" rel="noreferrer">
                    <img
                        className="rounded-lg"
                        src={AntStorage} alt="" 
                    />
                </a>
                


                <Project
                    title={"Vue Reading List"}
                    description={translations.ProjectDesc2}
                    chips={
                    <>
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"} name={"VueJs"} />
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"} name={"TailwindCSS"} />
        
                    </>
                    }
                    
                />
                <a href="https://vue-reading-list.vercel.app/" target="_blank" rel="noreferrer">
                    <img
                        className="rounded-lg"
                        src={VueReadingList} alt="" 
                    />
                </a>

                <Project
                    title={"BrowserHub Beta"}
                    description={translations.ProjectDesc3}
                    chips={
                    <>
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} name={"ReactJs"} />
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"} name={"TailwindCSS"} />
                        <TechnologyChip image={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"} name={"Figma"} />
                    </>
                    }
                    
                />
                <a href="https://albertcastineira.github.io/react-browserhub/" target="_blank" rel="noreferrer">
                    <img
                        className="rounded-lg"
                        src={BrowserHub} alt="" 
                    />
                </a>
                    
            </section>
        </main>
    );
}

export default Content;
