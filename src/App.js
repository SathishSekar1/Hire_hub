// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'; 

import {Routes,Route,  BrowserRouter as Router} from "react-router-dom";
import AddProduct from "./addproduct/addProduct.js"
import { HomePage } from './home/Home_page.js'; 
import  Footer from './component/footer.js';
import Header from './component/header.js';
function App() {
  return (

    <div className="App">
    <div className="container-fluid">
    <Header/>
    <Router>
       <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
      </Router>
      <Footer/>
    </div>
  
 </div>
  );
}
export default App;
