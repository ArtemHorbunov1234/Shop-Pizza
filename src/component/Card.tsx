import { useState } from 'react';
import styles from './card.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
const typeNames = ['тонке', 'традиційне'];
type CardType = {
    name: string;
    price: number;
    imgUrl: string;
    sizes: Array<null>;
    types: Array<null>;
    id: string;
};

function Card({ id, name, price, imgUrl, sizes, types }: CardType) {
    const dispatch = useDispatch();
    const cartItem: any = useSelector((state: RootState) => state.cart.items.find((obj: any) => obj.id === id));
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
            <Link to={`/pizza/${id}`}>
                <img src={imgUrl} alt='pizza' />
                <h1>{name}</h1>
            </Link>

            <div>
                <div className={styles.card_top}>
                    <div className={styles['card_pizza--dough']}>
                        {types.map((type: any, index: number) => (
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
                    <b>від {price}грн</b>
                    <button className={styles.card_bottom_hover} onClick={onClickAdd}>
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

export default Card;
