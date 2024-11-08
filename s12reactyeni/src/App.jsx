import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';
// App.jsx
function App() {
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