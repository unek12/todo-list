import {BrowserRouter} from 'react-router-dom'

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

import './styles/App.scss';
import Router from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>

        <div className="container">
            <Navbar/>
            <Router/>
      </div>
    </BrowserRouter>
  );
}
