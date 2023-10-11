import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FullPizza() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pizza, setPizza] = useState();

    useEffect(() => {
        async function fetchItems() {
            try {
                const { data } = await axios.get('https://6509be44f6553137159befd1.mockapi.io/items/' + id);
                setPizza(data);
            } catch (error) {
                alert('Помилка під час отримання даних про піц', error);
                navigate('/');
            }
        }
        fetchItems();
    }, []);
    if (!pizza) {
        return 'Loading....';
    }
    return (
        <div>
            <h1>{pizza.name}</h1>
            <img src={`/${pizza.imgUrl}`} alt='pizza' />
            <b>{pizza.price}грн</b>
        </div>
    );
}

export default FullPizza;
