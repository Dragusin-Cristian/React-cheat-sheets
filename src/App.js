import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
//
import { useEffect, useContext } from 'react';
import AuthContext, { AuthContextProvider } from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  return (

    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>

  );
}

export default App;


// OR USE THE CONTEXT JUST LOCALLY:

// return (
//   <AuthContextProvider>
//     <AuthContext.Consumer>
//       {ctx => {
//         return (
//           <React.Fragment>
//             <MainHeader />
//             <main>
//               {!ctx.isLoggedIn && <Login />}
//               {ctx.isLoggedIn && <Home />}
//             </main>
//           </React.Fragment>
//         );
//       }}
//     </AuthContext.Consumer>
//   </AuthContextProvider>
// );