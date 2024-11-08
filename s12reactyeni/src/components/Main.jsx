import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/actions';
import LanguageToggle from './LanguageToggle';
import locales from '../locales';

export const Main = () => {

    const dispatch = useDispatch();
    const isDarkMode = useSelector(state => state.isDarkMode);

    const handleToggleDarkMode = () => {
        dispatch(toggleDarkMode());
    };

    const language = useSelector((state) => state.language);
    const locale = locales[language];
    return (
        <div className="h-screen flex items-center justify-center 
                bg-gradient-to-r from-[#4731D3] from-60% to-[#CBF281] 
                dark:bg-gradient-to-r dark:from-[#171043] dark:from-60% dark:to-[#1A210B]">
            <div className='w-full md:w-[60%] h-[60%] mb-[15%]'>

                <header className='h-[15%] flex justify-between items-center flex-wrap md:flex-nowrap'>
                    <h1 className='text-[#CBF281] font-inter font-bold tracking-wider'>atakan</h1>
                    <div className='flex self-start gap-8 md:gap-40'>
                        <LanguageToggle />

                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label={isDarkMode ? 'Light Mode' : 'Dark Mode'}
                                className='text-[#4731D3] font-inter font-bold tracking-wider custom-switch'
                                checked={isDarkMode}
                                onChange={handleToggleDarkMode}
                            />
                        </Form>
                    </div>
                </header>
                <div className='w-full h-full flex flex-col md:flex-row'>
                    <div className='grow-[1] flex flex-col gap-10 justify-center'>
                        <h1 className='text-3xl md:text-6xl text-[#CBF281] font-inter whitespace-pre-line'>{locale.baslik}</h1>
                        <p className='text-xl md:text-3xl text-white font-inter whitespace-pre-line'>{locale.metin2}</p>
                        <nav className='flex flex-wrap gap-3'>
                            <a href="https://github.com/aatakankurnaz" className='px-2 py-2 bg-white rounded-md flex gap-2 no-underline items-center dark:!bg-[#252128]'>
                                <img src="/icons8-github.svg" alt="Github" className='w-8 h-8 hidden dark:block' />
                                <img src="/github-mark.png" alt="Github" className='w-8 h-8 block dark:hidden' />
                                <p className='m-0 font-inter text-[#3730A3] dark:text-white'>Github</p>
                            </a>
                            <a href="https://www.linkedin.com/in/atakan-kurnaz-235912174/" className='px-2 py-2 bg-white rounded-md flex gap-2 no-underline items-center dark:!bg-[#252128]'>
                                <img src="/icons8-linkedin.svg" alt="LinkedIn" className='w-8 h-8 hidden dark:block' />
                                <img src="/LI-In-Bug.png" alt="LinkedIn" className='w-8 h-8 block dark:hidden' />
                                <p className='m-0 font-inter text-[#3730A3] dark:text-white'>Linkedin</p>
                            </a>
                        </nav>
                    </div>
                    <div className='grow-[1] flex justify-center mt-4 md:mt-0'>
                        <img src="/107975 -1.JPG" alt="sds" className='h-[85%] rounded-2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}
