import Counter from './components/Counter';
//
import { Fragment } from "react";
import Auth from "./components/Auth.js";
import Header from "./components/Header.js";
import UserProfile from './components/UserProfile';
import {useSelector} from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Fragment>
       <Header />
      {isLoggedIn ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
