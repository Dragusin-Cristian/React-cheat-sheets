import './App.css';
import { useRef } from 'react';
import {useContext} from 'react';
import AuthContext from './store/AuthContext';

function App() {
  const nameRef = useRef();
  const passRef = useRef();
  
  // make use of the context
  const ctx = useContext(AuthContext);
  const isLoggedIn = ctx.isLoggedIn;
  const login = ctx.login;
  const logout = ctx.logout;

  const LoginSubmitHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const pass = passRef.current.value;
    login(name, pass);
    console.log(name, pass);

  }

  const LogouHandler = () => {
    logout();
  }

  return (
    <div className="App">
      <h2>Are you logged in?</h2>
      {isLoggedIn ? <p>YES</p> : <p>NO</p>}

      <form>
        <input
          htmlFor="email"
          name="E-Mail"
          type="email"
          id="email"
          placeholder='Name'
          ref={nameRef} />
        <input
          htmlFor="pass"
          name="Pass"
          type="pass"
          id="pass"
          placeholder='Password'
          ref={passRef} />

        <button type='submit' onClick={LoginSubmitHandler}>SUBMIT</button>
      </form>

      <button onClick={LogouHandler}>LOGOUT</button>
    </div>
  );
}

export default App;
