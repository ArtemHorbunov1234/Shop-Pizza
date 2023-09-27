import PropTypes from 'prop-types';
import Card from '../component/Card';
import Skeleton from '../component/PizzaBlock/skeleton';
import { useContext } from 'react';
import { SearchContext } from '../App';
import Navigation from '../component/Navigation';
function Home({ setCategoryId }) {
    const { searchItem, setSearchItem, setSort, items, isLoading } = useContext(SearchContext);
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
    const pizzas = items.map((item) => <Card key={item.id} {...item} />);
    return (
        <>
            <Navigation setCategoryId={(id) => setCategoryId(id)} setSortValue={(id) => setSort(id)} />

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
    setCategoryId: PropTypes.func.isRequired,
};

export default Home;
