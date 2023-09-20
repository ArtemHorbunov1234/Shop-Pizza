import Header from './component/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    useEffect(() => {
        async function fetchDate() {
            const ItemsResponse = await axios.get('https://6509be44f6553137159befd1.mockapi.io/items');
            setItems(ItemsResponse.data);
            setIsLoading(false);
        }
        fetchDate();
    }, []);
    return (
        <div className='content'>
            <Header />
            <hr />

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
