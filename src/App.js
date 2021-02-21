import "./App.css";
import BackToTopBtn from "./components/buttons/BackToTop";
import Toolbar from "./components/navigation/Toolbar";
import MainPage from "./pages/Single";
import Footer from "./components/navigation/Footer";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <MainPage />
      <BackToTopBtn />
      <Footer />
    </div>
  );
}

export default App;
