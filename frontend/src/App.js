import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Products from './components/Product';
import Category from './components/Category';
import {BrowserRouter,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
