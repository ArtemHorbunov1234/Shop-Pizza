import { useState } from 'react';
import styles from './navigation.module.scss';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { NavigationValue } from '../App';

function Navigation({ setCategoryId, setSortValue }) {
    const { categoryId, sort } = useContext(NavigationValue);

    const [isVisible, setIsVisible] = useState(false);
    const list = [
        { name: 'популярности', sortProperty: 'rating' },
        { name: 'ціна', sortProperty: 'price' },
        { name: 'алфавит', sortProperty: 'tittle' },
    ];
    const categories = ['Все', `М'ясні`, 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'];

    const onClickIsItem = (i) => {
        setSortValue(i);
        setIsVisible(!isVisible);
    };
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation_left}>
                {categories.map((category, index) => (
                    <li key={index} id={categoryId === index ? 'active' : ''} onClick={() => setCategoryId(index)}>
                        {category}
                    </li>
                ))}
            </ul>
            <ul className={styles.navigation_right}>
                <img src='img/navigation_arrow.svg' alt='arrow' />
                <li>Сортування за:</li>
                <li>
                    <span onClick={() => setIsVisible(!isVisible)}>{sort.name}</span>
                </li>
                {isVisible ? (
                    <div className={styles['navigation_right--active']}>
                        {list.map((obj, index) => (
                            <li
                                id={sort.sortProperty === obj.sortProperty ? styles.active_selected : ''}
                                key={index}
                                onClick={() => onClickIsItem(obj)}
                            >
                                {obj.name}
                            </li>
                        ))}
                    </div>
                ) : null}
            </ul>
        </nav>
    );
}

Navigation.propTypes = {
    setCategoryId: PropTypes.func.isRequired,
    setSortValue: PropTypes.func.isRequired,
};

export default Navigation;
