import Card from '../component/Card';
import Skeleton from '../component/PizzaBlock/skeleton';
import Navigation from '../component/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchItem } from '../redux/slices/filterSlice';
import { useRef } from 'react';
import debounce from 'lodash.debounce';
import { useState } from 'react';
import { useCallback } from 'react';
import Pagination from '../component/Pagination/Pagination';

function Home() {
    const isLoading = useSelector((state) => state.pizza.status);
    const items = useSelector((state) => state.pizza.items);
    const [value, setValue] = useState('');
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
    const pizzas = items.map((item) => <Card key={item.id} {...item} />);
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handleClearSearch = () => {
        inputRef.current.focus();
        setValue('');
        dispatch(setSearchItem(''));
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchItem(str));
        }, 350),
        [dispatch]
    );
    const onChangeSearch = (e) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
    };

    return (
        <>
            <Navigation />
            <div className='content_input'>
                <h1>Усі піци</h1>
                <div>
                    <img src='img/input-search.png' className='content_input--search' alt='search' />
                    <input ref={inputRef} onChange={onChangeSearch} type='text' value={value} placeholder='Пошук' />
                    {value.length > 0 ? (
                        <img
                            onClick={handleClearSearch}
                            src='img/input-delete.png'
                            className='content_input--delete'
                            width={25}
                            height={25}
                            alt=''
                        />
                    ) : (
                        ''
                    )}
                </div>
            </div>
            {isLoading === 'error' ? (
                <div className='content_error'>
                    <div className='content_error--header'>
                        <h1>Сталася помилка</h1>
                        <img src='/img/cart-smile.svg' alt='smile' />
                    </div>
                    <p>На жаль, не вдалося отримати піци. Спробуйте повторити спробу пізніше.</p>
                </div>
            ) : (
                <div className='card_pizza'>{isLoading === 'loading' ? skeletons : pizzas}</div>
            )}

            <Pagination />
        </>
    );
}

export default Home;
