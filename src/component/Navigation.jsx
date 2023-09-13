import styles from './navigation.module.scss';

function Navigation() {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigation_left}>
                <img src='/img/pizza-logo.png' width={38} height={38} alt='' />
                <div>
                    <h1>REACT PIZZA</h1>
                    <p>найсмачніша піца у всесвіті</p>
                </div>
            </div>
            <div className={styles.navigation_right}>
                <b>570 грн</b>
                <img src='img/line-right.svg' alt='line' />
                <img src='img/cart-right.svg' alt='cart' />
                <b>3</b>
            </div>
        </div>
    );
}

export default Navigation;
