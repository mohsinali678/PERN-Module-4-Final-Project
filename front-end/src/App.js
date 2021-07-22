//DEPENDENCIES
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


//PAGES
import Home from "./Pages/Home.js"
import Index from "./Pages/Index.js"
import New from "./Pages/New.js"
import Show from "./Pages/Show.js";
import Edit from "./Pages/Edit.js";
import FourOFour from "./Pages/FourOFour.js";



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

            <Route path="/products/new">
              <New />
            </Route>

            <Route exact path="/products/:id">
              <Show />
            </Route>

            <Route path="/products/:id/edit">
              <Edit />
            </Route>

            <Route path="*">
              <FourOFour />
            </Route>

          </Switch>
        </main>
      <FootBar />
      </Router>
    </div>
  );
}

export default App;
