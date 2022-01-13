import { Link } from "react-router-dom";

import './Keranjang.css';


const Keranjang = () => {
    let obj_data = JSON.parse(localStorage.getItem('Keranjang'));


    let total = 0;
    const action_bayar = () => {
        let obj_user = JSON.parse(localStorage.getItem('User'));
        localStorage.removeItem("Keranjang");
    }


    return (
        <div class="container">
            <div class="card shopping-cart">
                <div class="card-header bg-dark text-light">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    Keranjang Belanja
                    <Link to={{ pathname: "/", }}>
                        <a href="" class="btn btn-outline-info btn-sm pull-right">Lis Barang</a>
                    </Link>
                    <div class="clearfix"></div>
                </div>
                <div class="card-body">

                    {obj_data.map((key, index) => (

                        <>

                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-2 text-center">
                                    <img class="img-responsive" src={localStorage.getItem('Base_url') + "images/" + key.data.url} alt="prewiew" width="120" height="80" />

                                </div>
                                <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                    <h4 class="product-name"><strong>{key.data.nama_barang}</strong></h4>
                                    <h4 class="product-name">
                                        <small>Product description</small>
                                    </h4>
                                </div>
                                <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                    <div class="col-3 col-sm-3 col-md-6 text-md-right" style={{ paddingTop: 5 + 'px' }}>
                                        <h6><strong>{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(key.data.harga)} <span class="text-muted">x</span></strong></h6>

                                    </div>
                                    <div class="col-4 col-sm-4 col-md-4">
                                        <div class="quantity">

                                            <input type="number" step="1" max="99" min="1" title="Qty" class="qty"
                                                size="4" value={key.jumlah} />

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <hr />
                            <input type='hidden' value={total += key.jumlah * key.data.harga} />
                        </>
                    ))}
                </div>
                <div class="card-footer">

                    <div class="pull-right" style={{ margin: 10 + 'px', width: 100 + "%" }}>
                        <Link to={{ pathname: "/", }}>
                            <button onClick={action_bayar} class="btn btn-success pull-right" style={{ width: 10 + "%" }} >Bayar</button>
                        </Link>
                        <div class="pull-right" style={{ margin: 5 + 'px' }}>
                            Total price: <b>Rp {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(total)}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
}

export default Keranjang;