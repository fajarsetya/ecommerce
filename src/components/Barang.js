import { Link } from "react-router-dom";
const Barang = ({ barang }) => {
  return (

    <div class="col">
      <div class="card shadow-sm">

        <img src={localStorage.getItem('Base_url')+"images/" + barang.url} alt="" />
        <div class="card-body">
          <p class="card-text">{barang.nama_barang}</p>
          <p class="card-text">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(barang.harga)}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <Link to={{pathname: "/detail/"+barang.id_barang,}}>
                <button type="button" class="btn btn-sm btn-outline-secondary">Detail</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default Barang;