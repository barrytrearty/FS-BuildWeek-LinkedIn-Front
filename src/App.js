import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileTopCard from "./components/ProfileTopCard";
import AfterMain from "./components/AfterMain";
import PeopleSection from "./components/PeopleSection";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import MeSection from "./components/MeSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container>
          {/* needs profile id  */}
          <Route
            path="/linkedin/:id"
            exact
            render={(routerProps) => <MeSection {...routerProps} />}
          />
          {/* we are James for now (me) */}
          <Route
            path="/me"
            exact
            render={(routerProps) => <MeSection {...routerProps} />}
          />
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
