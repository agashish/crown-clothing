import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './../../assets/crown.svg'
import './header.styles.scss'
import {auth} from './../../firebase/firebase.utils';
import CartIcon from './../../components/cart-icon/cart-icon.component';
import CartDropdown from './../../components/cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './../../redux/user-reducer/user.selectors';
import { selectCartHidden } from './../../redux/cart-reducer/cart.selectors';
  
const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className="logo"/>
            </Link> 

            <div className='options'>
                <Link className='option' to="/shop">
                    SHOP 
                </Link>

                <Link className='option' to="/shop">
                    CONTACT
                </Link>

                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to="/signin">
                        SIGN IN
                    </Link>
                }

                <CartIcon />                
            </div>   
            {
                hidden ? null : <CartDropdown />
            }                        
        </div> 
    )
}

// #### OPTION 1 TO USE LIKE BELOW
// const mapStateToProps = state => ({ 
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

// #### IT WILL RETURN HIGH ORDER SUPED COMPONENT
export default connect(mapStateToProps)(Header);