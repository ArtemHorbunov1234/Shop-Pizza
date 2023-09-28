import Header from './component/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Pagination from './component/Pagination/Pagination';
import { createContext } from 'react';
export const SearchContext = createContext();
import { decrement, increment } from './redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
export const NavigationValue = createContext();

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [sort, setSort] = useState({ name: 'популярности', sortProperty: 'rating' });
    const [searchItem, setSearchItem] = useState('');
    const search = searchItem ? `&search=${searchItem}` : '';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const [currentPage, setCurrentPage] = useState(1);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    useEffect(() => {
        setIsLoading(true);
        async function fetchDate() {
            const ItemsResponse = await axios.get(
                `https://6509be44f6553137159befd1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}&order=desc${search}`
            );
            setItems(ItemsResponse.data);
            setIsLoading(false);
        }
        window.scrollTo(0, 0);
        fetchDate();
    }, [category, search, currentPage, sort]);
    return (
        <div className='content'>
            <SearchContext.Provider value={{ searchItem, setSearchItem, setSort, items, isLoading }}>
                <NavigationValue.Provider value={{ categoryId, sort }}>
                    <Header />
                    <hr />
                    <Routes>
                        <Route exact path='/' element={<Home setCategoryId={(id) => setCategoryId(id)} />} />
                        <Route exact path='/Cart' element={<Cart />} />
                    </Routes>
                    <div>
                        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
                            Increment
                        </button>
                        <span>{count}</span>
                        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
                            Decrement
                        </button>
                    </div>
                    <Pagination onChangePage={(number) => setCurrentPage(number)} />
                </NavigationValue.Provider>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
