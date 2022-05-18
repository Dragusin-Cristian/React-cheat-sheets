import Counter from './components/Counter';
// import Counter_method_1 from './components/Counter_method_1';
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
      {/* <Counter_method_1 /> */}
    </Fragment>
  );
}

export default App;
