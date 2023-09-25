import PropTypes from 'prop-types';
import Card from '../component/Card';
import Skeleton from '../component/PizzaBlock/skeleton';
function Home({ isLoading, items, searchItem, setSearchItem }) {
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
    const pizzas = items
        .filter((obj) => {
            if (obj.name.toLowerCase().includes(searchItem.toLowerCase())) {
                return true;
            }
            return false;
        })
        .map((item) => <Card key={item.id} {...item} />);
    return (
        <>
            <div className='content_input'>
                <h1>Усі піци</h1>
                <div>
                    <img src='img/input-search.png' className='content_input--search' alt='search' />
                    <input onChange={(e) => setSearchItem(e.target.value)} type='text' value={searchItem} />
                    {searchItem.length > 0 ? (
                        <img
                            onClick={() => setSearchItem('')}
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
        </>
    );
}

Home.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    searchItem: PropTypes.string.isRequired,
    setSearchItem: PropTypes.string.isRequired,
};

export default Home;
