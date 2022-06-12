import { Switch, Route, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Quotes from "./pages/Quotes";
import Navbar from "./components/Navbar";
import AppLayout from "./components/AppLayout";
import SpecificQuote from "./pages/SpecificQuote";
import NotFound from "./pages/NotFound";
import NewQuote from "./pages/NewQuote";

const DUMMY_DATA = [
  {
      id: "q1",
      title: "React is aweasome!",
      author: "Dragusin Cristian"
  },
  {
      id: "q2",
      title: "Learn to use React Router",
      author: "CacaMaca"
  }
];

function App() {
  return (
    <AppLayout>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/quotes" exact>
          <Quotes DUMMY_DATA={DUMMY_DATA}/>
        </Route>
        <Route path="/quotes/:id">
          <SpecificQuote DUMMY_DATA={DUMMY_DATA}/>
        </Route>
        <Route path="/newQuote">
          <NewQuote />
        </Route>
        {/* USE FOR NOT FOUND PAGE */}
        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
      </AppLayout>
      );
}

      export default App;
