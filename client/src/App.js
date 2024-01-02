import './App.css';
import Cart from './customer/components/cart/Cart';
import Footer from './customer/components/footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
// import Product from './customer/components/product/Product';
import ProductDetails from './customer/components/productDetails/ProductDetails';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        <Cart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
