import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './customer/components/cart/Cart';
import CheckOut from './customer/components/checkOut/CheckOut';
import Footer from './customer/components/footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import Order from './customer/components/order/Order';
import OrderDetails from './customer/components/order/OrderDetails';
import Product from './customer/components/product/Product';
import ProductDetails from './customer/components/productDetails/ProductDetails';
import HomePage from './customer/pages/HomePage/HomePage';
import CustomareRouter from './Router/CustomareRouter';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomareRouter />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
