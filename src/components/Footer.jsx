import { Icon } from '@iconify/react';

function Footer({translations}) {
  return (
    <footer className="grid grid-cols-1 md:block rounded-lg shadow m-4 bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10 py-2">
      <span className="text-center px-4 text-yellow-400">
        © 2023 Albert Castiñeira. {translations.AllRightsReserved}
      </span>
      <span className="text-center md:float-right px-4">
        <a className="text-blue-500" href="https://www.linkedin.com/in/albert-casti%C3%B1eira-aranda/" target="_blank" rel="noreferrer">
          <Icon className="inline-block mr-1 relative -top-0.5" icon="mdi:linkedin" width="20" height="20" />
        </a>
        <a className="text-center text-white" href="https://github.com/albertcastineira" target="_blank" rel="noreferrer">
          <Icon className="inline-block mr-1 relative -top-0.5" icon="mdi:github" width="20" height="20" />
        </a>
      </span>
    </footer>
  )
}

export default Footer
