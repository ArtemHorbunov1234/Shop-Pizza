import { useState } from 'react';
import styles from './navigation.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, setCategory } from '../redux/slices/filterSlice';
import { useRef } from 'react';
import { useEffect } from 'react';
export const list = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'ціна', sortProperty: 'price' },
    { name: 'алфавит', sortProperty: 'tittle' },
];

function Navigation() {
    const dispatch = useDispatch();
    const sort = useSelector((state) => state.filter.sort);
    const categoryId = useSelector((state) => state.filter.categoryId);
    const sortRef = useRef();

    const [isVisible, setIsVisible] = useState(false);

    const categories = ['Все', `М'ясні`, 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'];
    const setCategoryId = (i) => {
        dispatch(setCategory(i));
    };
    const onClickIsItem = (obj) => {
        dispatch(setSort(obj));
        setIsVisible(!isVisible);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.composedPath().includes(sortRef.current)) {
                setIsVisible(false);
                console.log('click');
            }
        };
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation_left}>
                {categories.map((category, index) => (
                    <li key={index} id={categoryId === index ? 'active' : ''} onClick={() => setCategoryId(index)}>
                        {category}
                    </li>
                ))}
            </ul>
            <ul className={styles.navigation_right} ref={sortRef}>
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

export default Navigation;
