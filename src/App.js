import './App.css';
import MainPage from './MainPage';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import ErrorPage from './ErrorPage';
import Product from './product';
import Price from './price';


function App() {
  return (

<Router>
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/product' element={<Product />} />
    <Route path='/price' element={<Price />} />
    <Route path='*' element={<ErrorPage/>}  />
  </Routes>
</Router>
  );
};

export default App;
