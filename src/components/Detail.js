import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import './Detail.css'

const Detail  = () => { 
  const { id } = useParams();

  const [barang, setBarang] = useState([]);

  useEffect(() => {
    // memanggil API untuk mengambil data barang
    fetch(localStorage.getItem('Base_url')+"api/barang/"+id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // ketika Rest API sukses, simpan data dari response ke dalam state lokal
        setBarang(data);

      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);


  const handleClick=() =>{

    let data1 = JSON.parse(localStorage.getItem('Keranjang'));
    if(data1 == null) data1 = [];


    let data2 = 
    { id : barang.id_barang,
      jumlah:1,
      data: barang
    };

    data1.push(data2);


    localStorage.setItem('Keranjang', JSON.stringify(data1));
    let obj_data=JSON.parse(localStorage.getItem('Keranjang'));
    console.log(obj_data);
  }

  return (

    <div class="container container_detail">

      <div class="row mb-2">
        <div class="col-md-12">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-auto d-none d-lg-block col-img" >
              <img src={localStorage.getItem('Base_url')+"images/"+barang.url} alt="" />

            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <div class="row line-bott" >
                <h5>{barang.nama_barang}</h5>
              </div>
              <div class="row line-bott" >
                <ul>
                  <li>5.5" Retina HD Display with 3D Touch</li>
                  <li>Fingerprint-resistant oleophobic coating</li>
                  <li>A9 chip with 64-bit</li>
                  <li>Ultrafast 4G LTE Advanced wireless</li>
                  <li>New 12-megapixel iSight camera</li>
                </ul>
              </div>
              <div class="text-center">
                <Link to={{pathname: "/keranjang",}}>
                <button onClick={handleClick} type="button" class="button-beli btn btn-secondary btn-lg">Tambah Ke Keranjang</button>
              </Link>                
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}


export default Detail;