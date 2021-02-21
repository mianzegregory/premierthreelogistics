import "./App.css";
import BackToTopBtn from "./components/buttons/BackToTop";
import Toolbar from "./components/navigation/Toolbar";
import MainPage from "./pages/Single";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <MainPage />
      <BackToTopBtn />
    </div>
  );
}

export default App;
