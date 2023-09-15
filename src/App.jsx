import Header from './component/Header';
import Navigation from './component/Navigation';
import Card from './component/Card';
import items from './pizza.json';
function App() {
    return (
        <div className='content'>
            <Header />
            <hr />
            <Navigation />
            <div className='content_input'>
                <h1>Усі піци</h1>
                <div>
                    <img src='img/input-search.png' alt='search' />
                    <input type='text' />
                </div>
            </div>
            <div className='card_pizza'>
                {items.map((item) => (
                    <Card
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        imgUrl={item.imgUrl}
                        sizes={item.sizes}
                        types={item.types}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
