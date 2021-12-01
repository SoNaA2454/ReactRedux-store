
import './App.css';
import ProductListing from './containers/ProductListing';
import Landingpage from  './containers/Landingpage';
import Store from "../src/redux/store";
import { Provider } from 'react-redux';
function App() {
  
  return (
    <Provider store={Store}>
        <Landingpage/>
        <ProductListing />
    </Provider>
  ); 
}

export default App;
