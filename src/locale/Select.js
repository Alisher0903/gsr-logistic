import React from "react";
import {useTranslation} from "react-i18next";
import { languageStore } from "./languageStore";

function 
Select({changeLang, className, value}) {
    const {setSelectedLanguage} = languageStore()

    const {t} = useTranslation();


    return (
        <select data-te-select-init
            id="language"
                className={`languageSelect z-50 bg-slate-[#FFFFFF] cursor-pointer border-[#111] px-6 py-2 shadow font-bold text-[1rem] rounded-full outline-0 fixed top-3`}
                onChange={(e) => changeLang(e.target.value, setSelectedLanguage)}
                value={localStorage.getItem("selectedLanguage")}>
                <option selected={false} className="bg-slate-100 " value="en">
                    ENG
                </option>
                <option selected={true} className="bg-slate-100" value="ru">
                    {t("ru")}
                </option>
        </select>
    );
}

export default Select;
