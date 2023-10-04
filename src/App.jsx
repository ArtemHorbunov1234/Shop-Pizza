import Header from './component/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { setFilters } from './redux/slices/filterSlice';
import { list } from './component/Navigation';
import { useRef } from 'react';

function App() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentPage, categoryId, searchItem, sort } = useSelector((state) => state.filter);
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const search = searchItem ? `&search=${searchItem}` : '';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
            dispatch(
                setFilters({
                    ...params,
                    sort,
                })
            );
            isSearch.current = true;
        }
    }, [dispatch]);

    const fetchPizzas = () => {
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
    };

    useEffect(() => {
        if (!isSearch.current || window.location.search === '?sortProperty=rating&categoryId=0&currentPage=1') {
            fetchPizzas();
        }
        isSearch.current = false;
    }, [category, search, currentPage, sort.sortProperty]);

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, currentPage, sort.sortProperty]);
    return (
        <div className='content'>
            <Header />
            <hr />
            <Routes>
                <Route exact path='/' element={<Home items={items} isLoading={isLoading} />} />
                <Route exact path='/Cart' element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
