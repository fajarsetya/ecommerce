// get our fontawesome imports
import ReactDOM from 'react-dom'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {

  const keranjang = (e)=>{
    let obj_data = JSON.parse(localStorage.getItem('Keranjang'));
    if(obj_data == null) {
      alert("Keranjang Kosong !");
      e.preventDefault();    
    }
    
    // console.log("ok");
  };
    return ( 
        <header className="App-header">
          <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
              <Link to={{pathname: "/",}} >
              <a href="#" class="navbar-brand d-flex align-items-center">
                <strong>Toko Online</strong>
              </a>
              </Link>

              <Link to={{pathname: "/keranjang",}} >
              <button onClick={keranjang} class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={ faShoppingCart } />
              </button>
              </Link>

            </div>
          </div>
        </header>
    );
}
 
export default Header;  
  
