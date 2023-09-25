import Header from './component/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navigation from './component/Navigation';
import Pagination from './component/Pagination/Pagination';
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [categoryId, setCategoryId] = useState(1);
    const [sort, setSort] = useState({ name: 'популярности', sortProperty: 'rating' });
    const [searchItem, setSearchItem] = useState('');
    const search = searchItem ? `&search=${searchItem}` : '';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const [currentPage, setCurrentPage] = useState(1);

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
    }, [categoryId, sort, searchItem, currentPage]);
    return (
        <div className='content'>
            <Header />
            <hr />
            <Navigation
                value={categoryId}
                setCategoryId={(id) => setCategoryId(id)}
                sortValue={sort}
                setSortValue={(id) => setSort(id)}
            />
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <Home
                            items={items}
                            isLoading={isLoading}
                            searchItem={searchItem}
                            setSearchItem={setSearchItem}
                        />
                    }
                />
                <Route exact path='/Cart' element={<Cart />} />
            </Routes>
            <Pagination onChangePage={(number) => setCurrentPage(number)} />
        </div>
    );
}

export default App;
