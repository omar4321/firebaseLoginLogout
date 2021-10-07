import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider, signOut} from 'firebase/auth'
import { useState } from 'react';
import './App.css';

import iniAtuthen from './Firebase/firebase.initialize';


iniAtuthen();
const GoogleProvider =  new GoogleAuthProvider ();
const GithHubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({})
  const auth = getAuth();
  const handleGooglesignIn = ()=>{
  
   signInWithPopup(auth, GoogleProvider)
   .then (result=>{
     const {displayName,email,photoURL} = result.user;
     const loggInUser = {
       name : displayName,
       Email : email,
       Photo : photoURL
     };
     setUser(loggInUser);
   });
   
  }
  const handleGithubSignIn = () => {
   signInWithPopup(auth , GithHubProvider)
   .then(result =>{
    const {displayName,email,photoURL} = result.user;
    const loggInUser = {
      name : displayName,
      Email : email,
      Photo : photoURL
    };
    setUser(loggInUser);
   })
   
  }
  const handdleSignOut =  () =>{
    signOut (auth)
    .then (()=>{
      setUser({});
    })
  }
  return (
    <div className="App">
     { !user.name?
       <div>
           <button onClick={handleGooglesignIn}>google sign In</button>
       <button onClick={handleGithubSignIn}>GitHub sign In</button>

       </div>:
              <button onClick={handdleSignOut}>sign Out</button>
     }
      <br />
      {
        user.name && <div>
          <h2>   Welcome {user.name}</h2>
          <p>Your Email {user.Email}</p>
          <img src={user.photo} alt="" />
          
           </div>
      }
    </div>
  );
}

export default App;
