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
