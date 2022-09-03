import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <AiOutlineShoppingCart/> */}
      <header className="App-header">
        <ItemListContainer titulo="Tienda de F1"/>
        <ItemListContainer greetings="Holaa"/>
      </header>
    </div>
  );
}

export default App;
