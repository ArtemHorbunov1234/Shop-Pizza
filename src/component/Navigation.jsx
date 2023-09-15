import { useState } from 'react';
import styles from './navigation.module.scss';

function Navigation() {
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = ['Все', `М'ясні`, 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'];
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation_left}>
                {categories.map((value, index) => (
                    <li key={index} id={activeIndex === index ? 'active' : ''} onClick={() => setActiveIndex(index)}>
                        {value}
                    </li>
                ))}
            </ul>
            <ul className={styles.navigation_right}>
                <img src='img/navigation_arrow.svg' alt='arrow' />
                <li>Сортування за:</li>
                <li>
                    <span>популярности</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
