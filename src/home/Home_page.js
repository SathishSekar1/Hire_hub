// import logo from './logo.svg';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.css'; 
import { React } from "react";
import { Link } from 'react-router-dom';

import ProgressBar from 'react-bootstrap/ProgressBar';


export function HomePage() {


  return (
      <div >
        <h1>"Hire Hub"</h1>
        Loading <ProgressBar animated now={45} />
        <Link to="addProduct">New Product</Link>
        </div>
  );
};
