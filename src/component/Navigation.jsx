import { useState } from 'react';
import styles from './navigation.module.scss';

function Navigation() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [selected, setSelected] = useState(0);
    const list = ['популярности', 'ціна', 'алфавит'];
    const categories = ['Все', `М'ясні`, 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'];

    const onClickIsItem = (i) => {
        setSelected(i);
        setIsVisible(!isVisible);
    };
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
                    <span onClick={() => setIsVisible(!isVisible)}>{list[selected]}</span>
                </li>
                {isVisible ? (
                    <div className={styles['navigation_right--active']}>
                        {list.map((value, index) => (
                            <li
                                id={selected === index ? styles.active_selected : ''}
                                key={index}
                                onClick={() => onClickIsItem(index)}
                            >
                                {value}
                            </li>
                        ))}
                    </div>
                ) : null}
            </ul>
        </nav>
    );
}

export default Navigation;
