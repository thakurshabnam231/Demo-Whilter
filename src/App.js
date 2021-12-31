
import React from 'react'
import GoogleForm from './GoogleForm'
import SignUpForm from './SignUpForm'
import Upload from './Upload'
import Amplify, { Auth,Hub } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


const App = () => {
    return (
        <div>
      <SignUpForm/>
            <GoogleForm/>
            <Upload/>
        </div>
    )
}

export default App
