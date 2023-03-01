import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/card-icon/card-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext, CartProvider } from '../../contexts/card.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinks,
  Navlink,
  LogoContainer,
} from './navigation.styles.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  //console.log(currentUser);
  const { isCartOpen } = useContext(CartContext);
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <Navlink to='/shop'>SHOP</Navlink>

          {currentUser ? (
            <Navlink as='span' onClick={signOutUser}>
              SING OUT
            </Navlink>
          ) : (
            <Navlink to='/auth'>SIGN IN</Navlink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
