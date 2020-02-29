import React from 'react';
import HomePage from './pages/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user-reducer/user.actions';
import './App.css';

import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component { 
  
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null            
  //   }
  // }

  // #### FIRST TIME
  unsubscribeAuth = null;
  
  componentDidMount = () => {
    const {setCurrentUser} = this.props;
    let userRef = null;

    // OPEN OBSERVER
    this.unsubscribeAuth = auth.onAuthStateChanged( async userAuth => {  
      
      if(userAuth) {
        userRef = await createUserProfileDocument(userAuth);

        // OPEN OBSERVER
        userRef.onSnapshot(snapshot => {
          // console.log(snapshot.data()) 
          // console.log(snapshot)    
          
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }, () => {
            console.log(this.state)
          })
        })
      } 
           
      setCurrentUser(userAuth)
    })
  }

  // #### UNMOUNTED THE COMPONENT IF LEFT FROM DOM
  ucomponentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div>     
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />  
          <Route path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser   
}) 


const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps, 
  mapDispatchToProps)(App);
