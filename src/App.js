import './App.css';
import Header from './components/Header';
import Award from './components/Award';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Award />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
