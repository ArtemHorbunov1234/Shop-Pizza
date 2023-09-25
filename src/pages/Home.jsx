import PropTypes from 'prop-types';
import Card from '../component/Card';
import Skeleton from '../component/PizzaBlock/skeleton';
function Home({ isLoading, items }) {
    return (
        <>
            <div className='content_input'>
                <h1>Усі піци</h1>
                <div>
                    <img src='img/input-search.png' alt='search' />
                    <input type='text' />
                </div>
            </div>
            <div className='card_pizza'>
                {isLoading
                    ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                    : items.map((item) => <Card key={item.id} {...item} />)}
            </div>
        </>
    );
}

Home.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
};

export default Home;
