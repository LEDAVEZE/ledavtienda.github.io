import './App.css';
import 'bulma/css/bulma.css';
import NavBar from './components/NavBar/navbar.jsx';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer.jsx';

function App() {

  return <>
    <NavBar></NavBar>
    <ItemListContainer greeting = {"Bienvenidos"} /> 
  </>
}

export default App;
