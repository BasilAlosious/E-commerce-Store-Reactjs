import React from 'react';
import {connect} from 'react-redux';
import { selectCartItemsCount} from '../../redux/cart/cart.selector';
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import { toggleCartHidden} from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden} >
    <ShoppingIcon  className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
    </div>
);
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});
export default connect(mapStateToProps,
    mapDispatchToProps
    )
    (CartIcon);