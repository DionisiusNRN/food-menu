import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.js";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: "red",
    fontSize: "50px",
    textTransform: "uppercase",
  };

  return <h1 style={style}>Warteg Mang Udin</h1>;
}

function Menu() {
  // const foods = [];
  const foods = data;
  const numFoods = foods.length;
  return (
    <main className="menu">
      <h2>Menu Kita</h2>

      {numFoods > 0 ? ( // if
        // berguna utk menjadi parent (fragment)
        // fragment tidak mengubah style, kalau pakai div atau pembungkus lainnya akan merubah stylenya
        <>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            dicta, assumenda, numquam exercitationem culpa quaerat unde
            voluptatibus ipsa ut eius nisi voluptatum consectetur maiores
            corporis reiciendis nobis vero qui quasi.
          </p>
          <ul className="foods">
            {data.map((food) => (
              <Food foodObj={food} key={food.nama} />
            ))}
          </ul>
        </>
      ) : (
        // else
        <p>Kosong, bang. Besok baru buka jam 10</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 10;
  const jamTutup = 22;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  if (isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterCloseHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }
}

function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {" "}
          {/* muncul ketika jam buka */}
          {new Date().getFullYear()} Warung Mang Udin | jam buka: {jamBuka} -
          jam tutup {jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function FooterCloseHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <p>maaf gan, masih tutup. besok jam 10</p>;
    </footer>
  );
}

function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props.foodObj;
  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <img src={foto} alt={nama} width="100" height="70" />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <span>{stok ? harga : "Habis"}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
