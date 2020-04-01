import React from 'react';
import {SignInSignUpStyles} from './sign-in-sign-up.styles';
// import './sign-in-and-sign-up.styles.scss';

import SignIn from './../../components/sign-in/sign-in.component';

import SignUp from './../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => (
    <SignInSignUpStyles>
        <SignIn />  
        <SignUp />  
    </SignInSignUpStyles>
)  

export default SignInAndSignUp;  