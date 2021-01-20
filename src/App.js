import React, { useState, useEffect } from "react";
import fire from './fire';
import Login from './Login';
import Hero from './Hero';
import './App.css';



const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [accountExists, setAccountExists] = useState(true);
  const [addToCart, setAddToCart] = useState('0');

  const handleCart = () => {
    setAddToCart('extraordinar')
  }

  const clearInputs = () => {
    setEmail('');
    setPass('');
  }

  const clearErrors = () =>{
    setEmailError('');
    setPassError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabeled":
        case "auth/user-not-found":
         setEmailError(err.message);
         break;
        case "auth/wrong-password":
          setPassError(err.message);
          break;
      }
    });

  };

  const handleSignup = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
         setEmailError(err.message);
         break;
        case "auth/weak-password":
          setPassError(err.message);
          break;
      }
    });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }
      else{
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [])
  return (
    <div className="App">
      {user ? (
        <Hero handleLogout = {handleLogout}
        addToCart = {addToCart}
        handleCart = {handleCart}/>
      ): (
      <Login email={email} 
      setEmail = {setEmail} 
      pass = {pass} 
      setPass = {setPass}
      handleLogin = {handleLogin}
      handleSignup = {handleSignup}
      accountExists = {accountExists}
      setAccountExists = {setAccountExists}
      emailError = {emailError}
      passError = {passError}/>
      )}
    </div>
  );
};

export default App;
