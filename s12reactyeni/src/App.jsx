import { useSelector } from "react-redux";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

function App() {
  const isDarkMode = useSelector(state => state.isDarkMode); 

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');  
    } else {
      document.body.classList.remove('dark');  
    }
  }, [isDarkMode]);


  return (
    <>
    <Main />
    <Skills />
    <Profile />
    <Projects />
    <Footer />
    </>
  );
}

export default App;