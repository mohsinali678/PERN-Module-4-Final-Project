//DEPENDENCIES
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


//PAGES
import Home from "./Pages/Home.js"
import Index from "./Pages/Index.js"


//COMPONENTS
import NavBar from "./Components/NavBar.js"
import FootBar from "./Components/FootBar.js"

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route exact path="/products">
              <Index />
            </Route>



          </Switch>
        </main>
      <FootBar />
      </Router>
    </div>
  );
}

export default App;
