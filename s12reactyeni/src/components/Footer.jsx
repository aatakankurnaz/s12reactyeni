import { useSelector } from "react-redux";
import locales from "../locales";

export const Footer = () => {
    const language = useSelector((state) => state.language);
    const locale = locales[language];
    return (
        <div className="flex items-center justify-center font-inter dark:bg-[#252128] py-10">
            <div className='w-full sm:w-[80%] lg:w-[60%] flex flex-col items-center'>
                <h1 className="text-[#4731D3] font-bold text-5xl dark:text-[#8F88FF]">{locale.mesaj}</h1>
                <h2 className="mt-8 text-center text-2xl dark:text-white whitespace-pre-line">{locale.mesaj2}</h2>
                <a href="mailto:atakankurnaz@gmail.com" className="mt-2 text-[#4731D3] text-xl dark:text-[#8F88FF]">{locale.email}</a>
                <nav className="flex gap-6 mt-5">
                    <a href="https://twitter.com" className="hover:opacity-70">
                        <img src="/twitter 1.png" alt="Twitter" className="block dark:hidden w-8 h-8"/>
                        <img src="/twitter 1 (1).png" alt="Twitter" className="hidden dark:block w-8 h-8"/>
                    </a>
                    <a href="https://codepen.io" className="hover:opacity-70">
                        <img src="/codepen 1.png" alt="CodePen" className="block dark:hidden w-8 h-8"/>
                        <img src="/codepen 1 (1).png" alt="CodePen" className="hidden dark:block w-8 h-8"/>
                    </a>
                    <a href="mailto:atakankurnaz@gmail.com" className="hover:opacity-70">
                        <img src="/at-sign 1.png" alt="Email" className="block dark:hidden w-8 h-8"/>
                        <img src="/at-sign 1 (1).png" alt="Email" className="hidden dark:block w-8 h-8"/>
                    </a>
                    <a href="https://instagram.com" className="hover:opacity-70">
                        <img src="/instagram 1.png" alt="Instagram" className="block dark:hidden w-8 h-8"/>
                        <img src="/instagram 1 (1).png" alt="Instagram" className="hidden dark:block w-8 h-8"/>
                    </a>
                </nav>
            </div>
        </div>
    );
};
