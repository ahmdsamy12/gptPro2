import { useTranslation } from "react-i18next";
import NavbarApp from "./components/NavbarApp/NavbarApp";
import Landing from "./components/landing/Landing";
import Gpt3 from "./components/gpt3/Gpt3";
import Services from "./components/services/Services";
import Apps from "./components/apps/Apps";
import Blog from "./components/blog/Blog";
import FooterApp from "./components/footer/FooterApp";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <NavbarApp />
      <Landing />
      <Gpt3 />
      <Services />
      <Apps />
      <Blog />
      <FooterApp />
    </div>
  );
}

export default App;
