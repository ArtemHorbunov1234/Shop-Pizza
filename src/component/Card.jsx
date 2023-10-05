import { useState } from 'react';
import styles from './card.module.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
const typeNames = ['тонке', 'традиційне'];

function Card({ id, name, price, imgUrl, sizes, types }) {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const addedCount = cartItem ? cartItem.count : 0;
    const onClickAdd = () => {
        const item = {
            id,
            name,
            price,
            imgUrl,
            types: typeNames[activeType],
            size: sizes[activeSize],
        };
        dispatch(addItem(item));
    };

    return (
        <div className={styles.card}>
            <img src={imgUrl} alt='pizza' />
            <h1>{name}</h1>
            <div>
                <div className={styles.card_top}>
                    <div className={styles['card_pizza--dough']}>
                        {types.map((type, index) => (
                            <li
                                onClick={() => setActiveType(index)}
                                id={activeType === type ? 'active_card' : ''}
                                key={index}
                            >
                                {typeNames[type]}
                            </li>
                        ))}
                    </div>
                    <div className={styles['card_pizza--size']}>
                        {sizes.map((size, index) => (
                            <b
                                onClick={() => setActiveSize(index)}
                                id={activeSize === index ? 'active_card' : ''}
                                key={index}
                            >
                                {size} см.
                            </b>
                        ))}
                    </div>
                </div>

                <div className={styles.card_bottom}>
                    <b>от {price}грн</b>
                    <button onClick={onClickAdd}>
                        <img src='img/pizza-plus.svg' alt='plus' />
                        Додати
                        {addedCount > 0 ? (
                            <b className={styles.card_bottom__count}>{addedCount > 0 ? addedCount : null}</b>
                        ) : null}
                    </button>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    sizes: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
};

export default Card;
