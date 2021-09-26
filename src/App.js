import { useEffect, useState } from "react";
import { Router } from "./HOC/Router";
import { supabase } from "./services/supabaseClient";
import { UserContext } from "./services/useContext";

function App() {
  const [session, setSession] = useState({
    log: supabase.auth.session(),
    loading: false,
    data: null,
  });

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, resp) => {
      setSession({
        log: resp,
        loading: false,
        data: null,
      });
    });
  }, []);

  return (
    <UserContext.Provider value={{ session, setSession }}>
      <Router />
    </UserContext.Provider>
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
