import { useEffect, useState } from "react";

import Barang from './Barang'

const Content = () => {

  const [barang, setBarang] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    // memanggil API untuk mengambil data barang
    fetch(localStorage.getItem('Base_url')+"api/barang")
      .then((res) => {
        // console.log(res.json);
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

  const onChangeText = (event) => {
    setFilter(event.target.value);
  }

  const action_filter = () => {
    console.log(filter);
    fetch(localStorage.getItem('Base_url')+'api/get?filter=' + filter)
      .then(response => response.json())
      .then((json) => {
        setBarang(json.data);
      })
  }

  return (
    <div class="album py-5 bg-light">
      <div class="container">

        <div class="row " style={{ paddingLeft: 35 + "%" }}>

          <input type="text"
            class="form-control mb-2"
            value={filter}
            onChange={onChangeText}
            placeholder="Filter Barang"
            style={{ width: 30 + "%", marginRight: 15 + "px" }} />

          <button type="submit" onClick={action_filter} class="btn btn-primary mb-2 " style={{ width: 10 + "%" }} >Submit</button>

        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {barang.map((barang1) => (
            <Barang barang={barang1} key={barang1.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;