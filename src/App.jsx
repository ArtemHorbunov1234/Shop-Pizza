import Header from './component/Header';
import Navigation from './component/Navigation';
import Card from './component/Card';

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
            <Card />
        </div>
    );
}

export default App;
