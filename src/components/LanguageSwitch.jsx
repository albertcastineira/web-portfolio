import { Icon } from '@iconify/react';

const LanguageSwitch = ({ onChangeLanguage, currentLanguage }) => {
  return (
    <div className="inline-flex mx-4">
      <button
        className={`mr-2 flex items-center ${currentLanguage == "EN" ? "opacity-100" : "opacity-20"}`}
        onClick={() => onChangeLanguage('EN')}
      >
        &nbsp;<Icon icon="emojione:flag-for-united-states" width="30" height="30" />
      </button>
      <button
        className={`flex items-center ${currentLanguage == "ES" ? "opacity-100" : "opacity-20"}`}
        onClick={() => onChangeLanguage('ES')}
      >
        <Icon icon="emojione:flag-for-spain" width="30" height="30" />
      </button>
    </div>
  );
};

export default LanguageSwitch;