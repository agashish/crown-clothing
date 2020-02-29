import React from 'react';

import './sign-in.styles.scss';

import FormInput from './../../components/form-input/form-input.component';

import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle, auth } from './../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {  
        super(props);
        this.state = {  
            email: '',
            password: '',
        }
    }  

    handleSubmit = async event => {

        // #### IT WILL HIJACK THE ACTUAL CONTROL < WHAT GONNA SUBMIT AFTER IT.
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''});
        } catch (err) {
            console.log(err);
        }
  
        this.setState({
            email: '',
            password: ''
        })

    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() { 
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with you email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="Email" value={this.state.email} handleChange={this.handleChange}  required />
                    {/* <label>Email</label> */}

                    <FormInput name="password" type="password" label="Password" value={this.state.password} handleChange={this.handleChange} required />
                    {/* <label>Password</label> */}

                    <div className="buttons">
                        <CustomButton type="submit">
                            SIGN IN
                        </CustomButton>

                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )     
    }
}

export default SignIn;