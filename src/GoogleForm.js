import React, { useEffect, useState } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function GoogleForm() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
      
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }
  if(user){
    console.log("user")
   return(<div className="app">
   <h3>Signed in</h3>
   <button onClick={()=>{
     Auth.signOut().then(()=>{
       setUser(null)
     })
   }}>Signout</button></div>)
    
  }

  return (
    <div>
   
        <button onClick={() => Auth.federatedSignIn({provider:'Facebook'})}>Facebook Sign In</button>
       <button onClick={() => Auth.federatedSignIn({provider:'Google'})}>Google Sign In</button>
      
    </div>
  );
}

export default GoogleForm;