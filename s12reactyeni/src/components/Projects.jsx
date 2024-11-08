import { useSelector } from "react-redux";
import locales from "../locales";

export const Projects = () => {
    const language = useSelector((state) => state.language);
    const locale = locales[language];
    return (
        <div className="bg-[#CBF281] flex flex-col items-center justify-center dark:bg-[#1A210B]">
            <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mt-20'>
                <h1 className="text-[#4731D3] font-Inter text-5xl font-bold dark:text-[#CBF281]">{locale.proje}</h1>
            </div>

           
            <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] flex flex-col sm:flex-row mt-10 bg-white rounded-xl drop-shadow-lg dark:!bg-[#2B2727]'>
                <div>
                    <img src="/kisisel.png" alt="" className="w-full sm:w-[400px] h-[400px] rounded-l-xl" />
                </div>
                <div className="flex flex-col justify-center ml-5 sm:ml-20 py-10">
                    <h1 className="text-[#4338CA] font-Inter dark:text-[#C1BAED]">{locale.kisisel}</h1>
                    <p className="font-Inter dark:text-white whitespace-pre-line">{locale.metin6}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {["React", "Redux", "Vercel", "Cypress", "Tailwind", "Axios", "Router"].map((tech, idx) => (
                            <button key={idx} className="px-4 py-1 rounded-2xl text-white bg-[#4731D3] dark:bg-[#8173DA]">
                                {tech}
                            </button>
                        ))}
                    </div>
                    <nav className="mt-3 flex gap-4">
                        <a href="https://s12t1react.vercel.app/" className="text-[#120B39] font-bold dark:text-[#CBF281]">{locale.sayfa}</a>
                        <a href="https://github.com/aatakankurnaz/s12t1react" className="text-[#120B39] font-bold dark:text-[#CBF281]">GitHub</a>
                    </nav>
                </div>
            </div>

            
            <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] flex flex-col sm:flex-row mt-10 bg-white rounded-xl drop-shadow-lg mb-20 dark:!bg-[#2B2727]'>
                <div>
                    <img src="/pizza.png" alt="" className="w-full sm:w-[400px] h-[400px] rounded-l-xl" />
                </div>
                <div className="flex flex-col justify-center ml-5 sm:ml-20 py-10">
                    <h1 className="text-[#4338CA] font-Inter dark:text-[#C1BAED]">Pizza</h1>
                    <p className="font-Inter dark:text-white whitespace-pre-line">{locale.metin5}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {["React", "Redux", "Vercel", "Cypress", "Tailwind", "Axios", "Router"].map((tech, idx) => (
                            <button key={idx} className="px-4 py-1 rounded-2xl text-white bg-[#4731D3] dark:bg-[#8173DA]">
                                {tech}
                            </button>
                        ))}
                    </div>
                    <nav className="mt-3 flex gap-4">
                        <a href="https://pizzareact-three.vercel.app/" className="text-[#120B39] font-bold dark:text-[#CBF281]">View Site</a>
                        <a href="https://github.com/aatakankurnaz/pizzareact" className="text-[#120B39] font-bold dark:text-[#CBF281]">GitHub</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};
