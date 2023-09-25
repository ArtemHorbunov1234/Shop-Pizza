import Header from './component/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navigation from './component/Navigation';
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [categoryId, setCategoryId] = useState(1);
    const [sort, setSort] = useState({ name: 'популярности', sortProperty: 'rating' });

    useEffect(() => {
        setIsLoading(true);
        async function fetchDate() {
            const ItemsResponse = await axios.get(
                `https://6509be44f6553137159befd1.mockapi.io/items?${
                    categoryId > 0 ? `category=${categoryId}` : ''
                }&sortBy=${sort.sortProperty}&order=desc`
            );
            setItems(ItemsResponse.data);
            setIsLoading(false);
        }
        window.scrollTo(0, 0);
        fetchDate();
    }, [categoryId, sort]);
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
                <Route exact path='/' element={<Home items={items} isLoading={isLoading} />} />
            </Routes>
            <Routes>
                <Route exact path='/Cart' element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
