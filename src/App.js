import { useEffect, useState } from "react"; 
import { TodoApp } from "./components/TodoApp";
import { supabase } from "./services/supabaseClient";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { ProfileUser } from "./components/ProfileUser";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <Router>
        <div className="font-sans bg-gray-50 max-w-full min-h-95 mx-auto">
          <Switch>
            <Route exact path="/profile">
              {session ? <ProfileUser session={session} /> : <SignIn />}
            </Route>
            <Route exact path="/signin">
              {session ? <TodoApp session={session} /> : <SignIn />}
            </Route>
            <Route exact path="/signup">
              {session ? <TodoApp session={session}/> : <SignUp />}
            </Route>
            <Route exact path="/">
              {session ? <TodoApp session={session}/> : <SignIn />}
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

// import './index.css'
// import { useState, useEffect } from 'react'
// import { supabase } from './services/supabaseClient'
// import Auth from './Auth'
// import Account from './Account'

// export default function App() {
//   const [session, setSession] = useState(null)

//   useEffect(() => {
//     setSession(supabase.auth.session())

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })
//   }, [])

//   return (
//     <div className="container" style={{ padding: '50px 0 100px 0' }}>
//       {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
//     </div>
//   )
// }
