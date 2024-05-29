import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import AboutPage from "./components/aboutPage/AboutPage";
import SkillsPage from "./components/skillsPages/SkillsPage";
import ContactPage from "./components/contactPage/FormPage";
import PrivacyPage from "./components/privacyPage/PrivacyPage";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />  
      <Route path="/skills" element={<SkillsPage />} />  
      <Route path="/about" element={<AboutPage />} />     
      <Route path="/privacy-policy" element={<PrivacyPage />} />     
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
