import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import SigninAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header-component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import './App.css';


class App extends React.Component {
 
  unsubscribeFromAuth=null

  componentDidMount(){
    const {setCurrentUser}=this.props;
   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          });
      });
     }
     else{
       setCurrentUser(userAuth);
     }
    });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route exact path= '/checkout' component={CheckoutPage}/>
      <Route exact path='/signin' render={()=> this.props.currentUser ?(
        <Redirect to ='/' />
      ): ( <SigninAndSignUp/>)
      } />
    </Switch>
      </div>
    );
  }
  
}
const mapStatetoProps = createStructuredSelector({
  currentUser:selectCurrentUser
});
const mapDispatchtoProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
