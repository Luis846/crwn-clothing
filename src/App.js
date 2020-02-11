import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from'./pages/shop/shop.components.jsx';
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
//this handles how to close the application auth changes on firebase
  unsubscribeFromAuth = null;


componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
          ...snapShot.data()
          }
        })
      });
    }
    else{
      this.setState({currentUser: userAuth});
    }
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}
/////////////////////////

  render(){
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )
  }

}

export default App;
