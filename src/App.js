import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Footer from "./components/navigation/Footer";
import Toolbar from "./components/navigation/Toolbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toolbar />
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route render={() => <HomePage />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
