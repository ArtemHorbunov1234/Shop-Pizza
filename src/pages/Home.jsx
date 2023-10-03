import Card from '../component/Card';
import Skeleton from '../component/PizzaBlock/skeleton';
import Navigation from '../component/Navigation';
import { useDispatch } from 'react-redux';
import { setSearchItem } from '../redux/slices/filterSlice';
import { useRef } from 'react';
import debounce from 'lodash.debounce';
import { useState } from 'react';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../component/Pagination/Pagination';

function Home({ isLoading, items }) {
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
            <div className='card_pizza'>{isLoading ? skeletons : pizzas}</div>
            <Pagination />
        </>
    );
}

Home.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
};

export default Home;
