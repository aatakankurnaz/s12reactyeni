import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../store/actions';


const LanguageToggle = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'tr' ? 'en' : 'tr';
    dispatch(setLanguage(newLanguage));
  };

  return (
    <button onClick={toggleLanguage} className='font-inter font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#CBF281] to-gray-500 dark:from-purple-300 dark:to-gray-500
    '>
      {language === 'tr' ? 'CHANGE TO ENGLISH' : "TÜRKÇE'YE GEÇ"}
    </button>
  );
};

export default LanguageToggle;
{/* <button className='font-inter font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#CBF281] to-gray-500 dark:from-purple-300 dark:to-gray-500
'>TÜRKÇE'YE GEÇ</button> */}