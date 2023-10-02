import Header from './component/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Pagination from './component/Pagination/Pagination';
import { createContext } from 'react';
export const SearchContext = createContext();
import { useSelector } from 'react-redux';

function App() {
    const currentPage = useSelector((state) => state.filter.currentPage);
    const categoryId = useSelector((state) => state.filter.categoryId);
    const sortType = useSelector((state) => state.filter.sort.sortProperty);
    const searchItem = useSelector((state) => state.filter.searchItem);
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    const search = searchItem ? `&search=${searchItem}` : '';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';

    useEffect(() => {
        setIsLoading(true);
        async function fetchDate() {
            const ItemsResponse = await axios.get(
                `https://6509be44f6553137159befd1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType}&order=desc${search}`
            );
            setItems(ItemsResponse.data);
            setIsLoading(false);
        }
        window.scrollTo(0, 0);
        fetchDate();
    }, [category, search, currentPage, sortType]);
    return (
        <div className='content'>
            <SearchContext.Provider value={{ items, isLoading }}>
                <Header />
                <hr />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/Cart' element={<Cart />} />
                </Routes>

                <Pagination />
            </SearchContext.Provider>
        </div>
    );
}

export default App;
