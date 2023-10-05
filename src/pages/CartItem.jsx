import styles from '../pages/cart.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

function CartItem({ id, name, price, count, imgUrl, types, size }) {
    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            })
        );
    };
    const onClickMinus = () => {
        dispatch(
            minusItem({
                id,
            })
        );
    };

    const onClickRemove = () => {
        dispatch(
            removeItem({
                id,
            })
        );
    };

    return (
        <div className={styles['cart--items']}>
            <div className={styles.cart__item}>
                <img src={imgUrl} alt='' />
                <div>
                    <h1>{name}</h1>
                    <h2>
                        {types}, {size} см.
                    </h2>
                </div>
            </div>
            <div className={styles.cart__main}>
                <div>
                    <img onClick={onClickMinus} src='img/cart-minus.svg' alt='minus' />
                    <b>{count}</b>
                    <img onClick={onClickPlus} src='img/cart-plus.svg' alt='plus' />
                </div>
                <b>{price * count} грн</b>
                <img onClick={onClickRemove} src='img/cart-delete.svg' alt='delete' />
            </div>
        </div>
    );
}
CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    types: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
};

export default CartItem;
