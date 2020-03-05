import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.components';
import './header.styles.scss';

const Header= ({currentUser, hidden}) =>(
   <div className='header'>
        <Link className='logo-container' to="/">
        <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
        <Link className='options' to="/shop">
          SHOP
        </Link>
        <Link className='options' to="/shop">
            CONTACT
        </Link>
        { currentUser ? (
            <div className='options' onClick={()=>auth.signOut()}>
            SIGN OUT 
            </div>
          )
          : (
            <Link className='options' to='/signin'>
            SIGN IN
            </Link>
          ) }
          <CartIcon className='options'/>
        </div>
         { hidden ? null : <CartDropdown/>}
   </div> 
);
const mapStateToProps =({user:{ currentUser },cart:{hidden}}) =>({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
