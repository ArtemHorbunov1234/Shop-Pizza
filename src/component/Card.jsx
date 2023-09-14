import styles from './card.module.scss';

function Card() {
    return (
        <div className={styles.card_pizza}>
            <div className={styles.card}>
                <img src='img/pizza-1.svg' alt='pizza' />
                <h1>Чізбургер-піца</h1>
                <div>
                    <div className={styles.card_top}>
                        <div className={styles['card_pizza--dough']}>
                            <h2>тонке</h2>
                            <h2>традиційне</h2>
                        </div>
                        <div className={styles['card_pizza--size']}>
                            <b>26см</b>
                            <b>30см</b>
                            <b>40см</b>
                        </div>
                    </div>

                    <div className={styles.card_bottom}>
                        <b>от 300грн</b>
                        <button>
                            <img src='img/pizza-plus.svg' alt='plus' />
                            Додати
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <img src='img/pizza-1.svg' alt='pizza' />
                <h1>Чізбургер-піца</h1>
                <div>
                    <div className={styles.card_top}>
                        <div className={styles['card_pizza--dough']}>
                            <h2>тонке</h2>
                            <h2>традиційне</h2>
                        </div>
                        <div className={styles['card_pizza--size']}>
                            <b>26см</b>
                            <b>30см</b>
                            <b>40см</b>
                        </div>
                    </div>

                    <div className={styles.card_bottom}>
                        <b>от 300грн</b>
                        <button>
                            <img src='img/pizza-plus.svg' alt='plus' />
                            Додати
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <img src='img/pizza-1.svg' alt='pizza' />
                <h1>Чізбургер-піца</h1>
                <div>
                    <div className={styles.card_top}>
                        <div className={styles['card_pizza--dough']}>
                            <h2>тонке</h2>
                            <h2>традиційне</h2>
                        </div>
                        <div className={styles['card_pizza--size']}>
                            <b>26см</b>
                            <b>30см</b>
                            <b>40см</b>
                        </div>
                    </div>

                    <div className={styles.card_bottom}>
                        <b>от 300грн</b>
                        <button>
                            <img src='img/pizza-plus.svg' alt='plus' />
                            Додати
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <img src='img/pizza-1.svg' alt='pizza' />
                <h1>Чізбургер-піца</h1>
                <div>
                    <div className={styles.card_top}>
                        <div className={styles['card_pizza--dough']}>
                            <h2>тонке</h2>
                            <h2>традиційне</h2>
                        </div>
                        <div className={styles['card_pizza--size']}>
                            <b>26см</b>
                            <b>30см</b>
                            <b>40см</b>
                        </div>
                    </div>

                    <div className={styles.card_bottom}>
                        <b>от 300грн</b>
                        <button>
                            <img src='img/pizza-plus.svg' alt='plus' />
                            Додати
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <img src='img/pizza-1.svg' alt='pizza' />
                <h1>Чізбургер-піца</h1>
                <div>
                    <div className={styles.card_top}>
                        <div className={styles['card_pizza--dough']}>
                            <h2>тонке</h2>
                            <h2>традиційне</h2>
                        </div>
                        <div className={styles['card_pizza--size']}>
                            <b>26см</b>
                            <b>30см</b>
                            <b>40см</b>
                        </div>
                    </div>

                    <div className={styles.card_bottom}>
                        <b>от 300грн</b>
                        <button>
                            <img src='img/pizza-plus.svg' alt='plus' />
                            Додати
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
