import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import HomePage from './pages/HomePage';
import LoggedInHomePage from './pages/LoggedInHomePage';
import AdminHomePage from './pages/AdminHomePage';
import OrgSignUpPage from './pages/OrgSignUpPage';
const SECRET_TOKEN = process.env.SECRET_TOKEN


function requireAuth(nextState, replace) {
  const authToken = localStorage.getItem(SECRET_TOKEN)
  if (!(!!authToken)) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default function appRoutes() {
  return (
    <Route component={App}>
      <Route path="/" component={HomePage} />
      <Route path="/org-signup" component={OrgSignUpPage}/>
      <Route path="/admin" component={AdminHomePage} onEnter={requireAuth} />
      <Route path="/protect" component={LoggedInHomePage} onEnter={requireAuth} />
    </Route>
  )
}
