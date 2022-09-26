
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route, useParams} from "react-router-dom";
import Details from './components/Details';
import Cardsdata from './components/CardsData';
import React,{useState} from 'react';
import EmailValidation from './components/EmailValidation';
import axios from "axios";
import Avis from './components/Avis';
function App() {
  
  const [data, setData] = useState(Cardsdata);
  const [rname, setRname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLogin, setAuthLogin] = useState(false);
  const [valid1, setValid1] = useState(false);
  const [valid2, setValid2] = useState(false);

  const ChangeRname = (e) => {
    setRname(e.target.value);
  };

  const ChangeEmail = (e) => {
    setEmail(e.target.value);
    
  setValid1(true);
    console.log(email+valid1)
  };
  const ChangePassword = (e) => {
    setPassword(e.target.value);

    setValid2(true)
    console.log(password+valid2)
  };


console.log(email)
  const ChangeAuthLogin = () => {
    (valid1&&valid2)?
    setAuthLogin(true):
 console.log("authlogin"+authLogin)
    };
    const Disconnect = () => {
     
      setAuthLogin(false)
 
      };

    
  return (
  <>
   <Header rname={rname} ChangeRname={ChangeRname} authLogin={authLogin} Disconnect={Disconnect}/>
   
   <Routes>
     
     {authLogin ? (
      <>
         <Route path='/home' element={<Cards data={data.filter((elm) =>
          elm.rname.trim().toLowerCase().includes(rname.trim().toLowerCase())
        )}  />}   />
         <Route path='' element={<Cards data={data.filter((elm) =>
          elm.rname.trim().toLowerCase().includes(rname.trim().toLowerCase())
        )}  />}   />
     <Route path='/cart/:id' element={<CardsDetails />} />
     <Route path='/detail/:id' element={<Details />} />
     <Route path='/Avis' element={<Avis />} />
      </>
    ) : (<>
      <Route path='/' element={<EmailValidation authLogin={authLogin} valid1={valid1} valid2={valid2} email={email} ChangePassword={ChangePassword}  ChangeEmail={ChangeEmail} password={password} ChangeAuthLogin={ChangeAuthLogin}/>}/>
    
      <Route path='/ecommercewebsitewithredux' element={<EmailValidation authLogin={authLogin} valid1={valid1} valid2={valid2} email={email} ChangePassword={ChangePassword}  ChangeEmail={ChangeEmail} password={password} ChangeAuthLogin={ChangeAuthLogin}/>}/>
      </>)}
   </Routes>
  </>
  );
}

export default App;