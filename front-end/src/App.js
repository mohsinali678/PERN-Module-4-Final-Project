//DEPENDENCIES
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

//PAGES
import Home from "./Pages/Home.js";
import Index from "./Pages/Index.js";
import New from "./Pages/New.js";
import Show from "./Pages/Show.js";
import Edit from "./Pages/Edit.js";
import FourOFour from "./Pages/FourOFour.js";
import Cart from "./Components/Cart";

//COMPONENTS
import NavBar from "./Components/NavBar.js";
import FootBar from "./Components/FootBar.js";

function App() {
  const [cartContent, setCartContent] = useState([]);

  const addToCart = (product) => {
    setCartContent([...cartContent, product]);
  };

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
              <Index addToCart={addToCart} />
            </Route>

            <Route path="/cart">
              <Cart cartContent={cartContent} />
            </Route>

            <Route path="/products/new">
              <New />
            </Route>

            <Route exact path="/products/:id">
              <Show addToCart={addToCart} />
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
