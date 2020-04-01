import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './../../assets/crown.svg'
// import './header.styles.scss'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header-styles';

import {auth} from './../../firebase/firebase.utils';
import CartIcon from './../../components/cart-icon/cart-icon.component';
import CartDropdown from './../../components/cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './../../redux/user-reducer/user.selectors';
import { selectCartHidden } from './../../redux/cart-reducer/cart.selectors';
  
const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>  
            <LogoContainer to="/">
                <Logo className="logo"/> 
            </LogoContainer> 

            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP    
                </OptionLink>

                <OptionLink to="/shop">
                    CONTACT
                </OptionLink>

                {
                    currentUser ?
                        // <OptionLink as="div"  onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                        <OptionLink as={OptionDiv} onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
                }

                <CartIcon />                  
            </OptionsContainer>   
            {
                hidden ? null : <CartDropdown />
            }                        
        </HeaderContainer> 
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