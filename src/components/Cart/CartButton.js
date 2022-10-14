import classes from './CartButton.module.css';

import {useDispatch, useSelector} from 'react-redux';
import { cartActions } from '../../store/CartReducer';


const CartButton = (props) => {

  const dispatch = useDispatch();

  // const cartStatus = useSelector(state => state.cartReducer.cartStatus)
  const cartHandler = ()=> {
      dispatch(cartActions.openCart());
  }

  return (
    <button className={classes.button} onClick={cartHandler} >
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
