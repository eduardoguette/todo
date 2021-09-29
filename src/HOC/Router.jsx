import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";
import { ProfileUser } from "../components/ProfileUser";
import { ForgotPass } from "../pages/ForgotPass";
import { TodoApp } from "../pages/TodoApp";
import { UserContext } from "../services/useContext"; 
import { RecoverPass } from "../pages/RecoverPass";
import NoMatch from "../pages/NoMatch";

export const Router = () => {
  const { session } = useContext(UserContext);
 
  return (
    <BrowserRouter>
      <div className="font-sans max-w-full min-h-screen bg-gray-50">
        <Switch>
          <Route exact path="/profile">
            {session.log?.access_token ? <ProfileUser /> : <SignIn />}
          </Route>
          <Route exact path="/signin">
            {session.log?.access_token ? <TodoApp /> : <SignIn />}
          </Route>
          <Route exact path="/signup">
            {session.log?.access_token ? <TodoApp /> : <SignUp />}
          </Route>
          <Route exact path="/password_resets">
            {session.log?.access_token ? <TodoApp /> : <ForgotPass />}
          </Route>
          <Route path="type=recovey">
            {session.log?.access_token ? <TodoApp /> : <RecoverPass />}
          </Route>
          <Route exact path="/">
            {session.log?.access_token ? <TodoApp /> : <SignIn />}
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
