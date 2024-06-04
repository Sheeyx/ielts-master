import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, useLocation } from "react-router-dom";
import Header from './components/header';
import { Banner } from './components/banner';
import { HomePage } from './screens/home';
import ListeningSection from './screens/listening';
import AuthenticationModal from './components/auth';
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from './lib/sweetAlert';
import { useGlobals } from './hooks/useGlobals';
import { Messages } from './lib/config';



function App() {
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const { authMember } = useGlobals();
  const { setAuthMember } = useGlobals();


  /** Handlers **/

  const handleLogoutRequest = async () => {
    try {
      // const member = new MemberService();
      // await member.logout();

      await sweetTopSmallSuccessAlert("success", 700);
      setAuthMember(null);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(Messages.error1);
    }
  };

  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);
  return (
    <div className="app">
      <Banner />
      <Header 
        setSignupOpen={setSignupOpen}
        setLoginOpen={setLoginOpen}
        handleLogoutRequest={handleLogoutRequest}
      />
      <Switch>
        <Route path="/listening">
          <ListeningSection />
        </Route>
        <Route path="/">
          <HomePage 
            setSignupOpen={setSignupOpen}
            />
        </Route>
      </Switch>
      <AuthenticationModal
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleLoginClose={handleLoginClose}
        handleSignupClose={handleSignupClose}
      />
    </div>
  );
}

export default App;
