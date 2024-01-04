import { render } from "preact";
import { Route, Router } from "preact-router";
import { Counter } from "~/Counter";
import { Home } from "~/Home";
// Global styles
import "~/theme/global.css";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/counter" component={Counter} />
    </Router>
  );
};

const root = document.getElementById("app");
if (root) render(<App />, root);
