import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Tshart from './Pages/Tshart/Tshart';
import TshartSingle from './Pages/TshartSingle/TshartSingle';
import Shop from './Pages/Shop/Shop';
import SingleShops from './Pages/SingleShops/SingleShops';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/"> 
          <Home></Home>
        </Route>
        <Route path="/home"> 
          <Home></Home>
        </Route>
        <Route path="/tshart"> 
          <Tshart></Tshart>
        </Route>
        <Route path="/shop"> 
          <Shop></Shop>
        </Route>
        <Route path="/singleTshart/:i"> 
          <TshartSingle></TshartSingle>
        </Route>
        <Route path="/singleShop/:id"> 
          <SingleShops></SingleShops>
        </Route>
        <Route path="/singleProduct/:idd">
          <SingleProduct></SingleProduct>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
