import styles from './navigation.module.scss';

function Navigation() {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigation_left}>
                <h1>Все</h1>
                <h1>М&apos;ясні</h1>
                <h1>Вегетаріанська</h1>
                <h1>Гриль</h1>
                <h1>Гострі</h1>
                <h1>Закриті</h1>
            </div>
            <div className={styles.navigation_right}>
                <img src='img/navigation_arrow.svg' alt='arrow' />
                <h1>Сортування за:</h1>
                <h1>
                    <span>популярности</span>
                </h1>
            </div>
        </div>
    );
}

export default Navigation;
