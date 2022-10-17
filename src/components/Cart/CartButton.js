import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleState = useSelector((state) => state.ui.cartIsVisible);
  console.log('toggling state', toggleState);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
    console.log('toggling');
  };

  // const toggleCartHandler = () => {
  //   console.log('toggling')
  // }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
