import React from 'react';
import HomePage from './pages/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const HatsPage = props => {
  return (
    <h1>Hats Page - {props.match.params.menuItem}</h1>
  )
}

class App extends React.Component { 
  
  constructor() {
    super();

    this.state = {
      currentUser: null            
    }
  }

  // #### FIRST TIME
  unsubscribeAuth = null;
  
  componentDidMount = () => {
    let userRef = null;

    // OPEN OBSERVER
    this.unsubscribeAuth = auth.onAuthStateChanged( async userAuth => {  
      
      if(userAuth) {
        userRef = await createUserProfileDocument(userAuth);

        // OPEN OBSERVER
        userRef.onSnapshot(snapshot => {
          // console.log(snapshot.data()) 
          // console.log(snapshot)    
          
          this.setState({
            currentUser: {
              id: snapshot.id,
            ...snapshot.data()
            }
          }, () => {
            console.log(this.state)
          })
        })
      } 
           
      this.setState({  
        currentUser: userAuth
      })
    })
  }

  // #### UNMOUNTED THE COMPONENT IF LEFT FROM DOM
  ucomponentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div>     
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />  
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
