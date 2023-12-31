import './App.css';
import Footer from './customer/components/footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import Product from './customer/components/product/Product';
// import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
