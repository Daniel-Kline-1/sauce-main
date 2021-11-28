import Home from "./pages/home";
import "./App.css";
import Nav1 from "./pages/Nav";
import Footer from "./pages/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import DirtyDan from "./pages/dirty-dan";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div className="App" style={appStyle}>
        <Nav1 />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />

          <Route path="/resume" component={DirtyDan} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
const appStyle = {
  backgroundColor: '#F3F3F3',
}
export default App;
