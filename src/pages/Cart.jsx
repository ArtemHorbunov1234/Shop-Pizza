import styles from '../pages/cart.module.scss';
import { Link } from 'react-router-dom';

function Cart() {
    return (
        <div className={styles.cart}>
            <div className={styles['cart--header']}>
                <div>
                    <img src='img/cart-icon.svg' alt='cart' />
                    <h1>Кошик</h1>
                </div>
                <div>
                    <img src='img/cart-icon_2.svg' alt='cart' />
                    <h2>Очистити кошик</h2>
                </div>
            </div>
            <div className={styles['cart--items']}>
                <div className={styles.cart__item}>
                    <img src='img/cart-pizza.png' alt='' />
                    <div>
                        <h1>Сырный цыпленок</h1>
                        <h2>тонкое тесто, 26 см.</h2>
                    </div>
                </div>
                <div className={styles.cart__main}>
                    <div>
                        <img src='img/cart-minus.svg' alt='minus' />
                        <b>2</b>
                        <img src='img/cart-plus.svg' alt='plus' />
                    </div>
                    <b>300грн</b>
                    <img src='img/cart-delete.svg' alt='delete' />
                </div>
            </div>
            <div className={styles['cart--items']}>
                <div className={styles.cart__item}>
                    <img src='img/cart-pizza.png' alt='' />
                    <div>
                        <h1>Сырный цыпленок</h1>
                        <h2>тонкое тесто, 26 см.</h2>
                    </div>
                </div>
                <div className={styles.cart__main}>
                    <div>
                        <img src='img/cart-minus.svg' alt='minus' />
                        <b>2</b>
                        <img src='img/cart-plus.svg' alt='plus' />
                    </div>
                    <b>300грн</b>
                    <img src='img/cart-delete.svg' alt='delete' />
                </div>
            </div>
            <div className={styles['cart--amount']}>
                <h1>
                    Усього піц:
                    <b> 3 шт</b>
                </h1>
                <h1>
                    Сума замовлення: <span>900 грн</span>
                </h1>
            </div>
            <div className={styles['cart--footer']}>
                <Link to='/'>
                    <button className={styles['cart--footer__exit']}>
                        <img src='img/cart-exit_button.svg' alt='exit' />
                        Повернутися назад
                    </button>
                </Link>

                <button className={styles['cart--footer__pay']}>Оплатити зараз</button>
            </div>
        </div>
    );
}

export default Cart;
