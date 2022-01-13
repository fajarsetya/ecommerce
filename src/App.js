// import logo from './logo.svg';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header from "./components/Header";
import Content from "./components/Content";
import Detail from './components/Detail';
import Keranjang from "./components/Keranjang";
function App() {

  // localStorage.removeItem("Keranjang");

  // localStorage.setItem('Base_url', 'http://127.0.0.1:8000/');
  localStorage.setItem('Base_url', 'https://e-commerce-backend.000webhostapp.com/public/');
  useEffect(() => {
    // memanggil API untuk mengambil data barang
    fetch(localStorage.getItem('Base_url')+"api/pembeli/1")
      .then((res) => {
        // console.log(res.json);
        return res.json();
      })
      .then((data) => {
        // ketika Rest API sukses, simpan data dari response ke dalam state lokal
        // setUser(data);
        localStorage.setItem('User', JSON.stringify(data));
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/detail/:id" element={<Detail  />} />
          <Route path="/keranjang" element={<Keranjang  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
