import { hot } from "react-hot-loader/root";
import * as React from "react";
import pMinDelay from "p-min-delay";
import loadable from "@loadable/component";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Loading } from "../Loading";
import { Home } from "../Home";
import style from "./App.scss";

const Wombats = loadable(() => pMinDelay(import("../Wombats"), 500), {
  fallback: <Loading />
});

const HelloWorlds = loadable(() => pMinDelay(import("../HelloWorlds"), 500), {
  fallback: <Loading />
});

function AppComponent() {
  return (
    <Router>
      <main className={style.Main}>
        <h1>A header</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/wombats">Wombats</Link>
            </li>
            <li>
              <Link to="/helloworlds">Hello worlds</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/wombats" component={Wombats} />
        <Route path="/helloworlds" component={HelloWorlds} />
      </main>
    </Router>
  );
}

export const App = hot(AppComponent);
