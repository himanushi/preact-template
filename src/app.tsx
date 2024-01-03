import { render } from "preact";
import Router, { Route } from "preact-router";
import { Home } from "~/Home";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
};

const root = document.getElementById("app");

if (root !== null) {
  render(<App />, root);
}
