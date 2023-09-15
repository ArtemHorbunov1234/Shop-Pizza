import { useState } from 'react';
import styles from './card.module.scss';
import PropTypes from 'prop-types';

function Card({ name, price, imgUrl, sizes, types }) {
    const [numberOfPizza, setNumberOfPizza] = useState(0);
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const typeNames = ['тонке', 'традиційне'];
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
                    <button onClick={() => setNumberOfPizza(numberOfPizza + 1)}>
                        <img src='img/pizza-plus.svg' alt='plus' />
                        Додати
                        <b>{numberOfPizza > 0 ? numberOfPizza : null}</b>
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
};

export default Card;
