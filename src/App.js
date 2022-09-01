import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
     <Header></Header>
     <Router>
      <Routes>
        <Route path="/" element={<Shop></Shop>} />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/manage" element={<Manage></Manage>} />
        <Route path="/product/:productkey" element={<ProductDetails></ProductDetails>} />
        <Route path="*" element={<h1> 404 </h1>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
