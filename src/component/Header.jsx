import styles from './header.module.scss';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className={styles.header}>
            <Link to=''>
                <div className={styles.header_left}>
                    <img src='/img/pizza-logo.png' width={38} height={38} alt='' />
                    <div>
                        <h1>REACT PIZZA</h1>
                        <p>найсмачніша піца у всесвіті</p>
                    </div>
                </div>
            </Link>
            <Link to='/Cart'>
                <div className={styles.header_right}>
                    <b>570 грн</b>
                    <img src='img/line-right.svg' alt='line' />
                    <img src='img/cart-right.svg' alt='cart' />
                    <b>3</b>
                </div>
            </Link>
        </div>
    );
}

export default Header;
