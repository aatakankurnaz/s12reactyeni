import { useSelector } from "react-redux";
import locales from "../locales";

export const Profile = () => {
    const language = useSelector((state) => state.language);
    const locale = locales[language];
    return (
        <div className="h-[70vh] bg-[#4731D3] flex items-center justify-center dark:bg-[#171043]">
            <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto flex flex-col gap-5'>
                <h1 className="text-[#CBF281] font-Inter text-5xl font-bold">{locale.profil}</h1>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                    <div className="flex flex-col gap-3 grow-[0.1]">
                        <h2 className="text-[#FFFFFF] font-Inter">{locale.bilgiler}</h2>
                        <div className="flex gap-2 flex-col sm:flex-row">
                            <div className="flex flex-col gap-3">
                                <p className="text-[#CBF281] font-semibold">{locale.dogum}</p>
                                <p className="text-[#CBF281] font-semibold">{locale.ikamet}</p>
                                <p className="text-[#CBF281] font-semibold whitespace-pre-line">{locale.egitim}</p>
                                <p className="text-[#CBF281] font-semibold whitespace-pre-line">{locale.rol}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-white font-semibold">18.07.1994</p>
                                <p className="text-white font-semibold">İstanbul</p>
                                <p className="text-white font-semibold">Kocaeli Ünv. Kamu Yönetimi <br />Lisans, 2018</p>
                                <p className="text-white font-semibold">Frontend, UI</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center grow-[0.3] mb-5 sm:mb-0">
                        <img src="/107975 -1.JPG" alt="" className="h-80 w-80 rounded-xl drop-shadow-lg"/>
                    </div>
                    <div className="flex flex-col gap-3 ml-3 grow-[1]">
                        <h2 className="text-[#FFFFFF] font-Inter">{locale.hakkimda}</h2>
                        <div className="flex flex-col gap-3">
                            <p className="text-white font-Inter whitespace-pre-line">{locale.metin3}</p>
                            <p className="text-white font-Inter whitespace-pre-line">{locale.metin4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
