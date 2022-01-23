import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [precnik, setPrecnik] = useState(10);
  const [preklop, setPreklop] = useState(3);
  const [rezultat, setRezultat] = useState(0);

  useEffect(() => {
    ukupanRezultat(10, 3);
  }, []);

  const izmenaPrecnika = (e) => {
    setPrecnik(parseInt(e.target.value));
    ukupanRezultat(parseInt(e.target.value), preklop);
  };

  const izmenaPreklop = (e) => {
    setPreklop(parseInt(e.target.value));
    ukupanRezultat(precnik, parseInt(e.target.value));
  };

  const ukupanRezultat = (precnik, preklop) => {
    setRezultat(precnik * Math.PI + preklop);
  };

  //ukupanRezultat();
  return (
    <div className="App">
      <div>
        <h1>Unesite prečnik cevi u centimetrima:</h1>
        <select onChange={(e) => izmenaPrecnika(e)}>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
        </select>
        <h1>Unesite ukupan preklop cevi u centimetrima:</h1>
        <select onChange={(e) => izmenaPreklop(e)}>
          <option value="2">2</option>
          <option value="3" selected="selected">
            3
          </option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <h1>
          Ukupna dužina table lima za sečenje iznosi: {rezultat.toFixed(1)} cm.
        </h1>
      </div>
      <div className="kontakt">
        <h2>
          Simex TAS doo, termoizolacija mineralnom vunom i limom, 14253 Osečina{" "}
        </h2>
        <h4>Zastupnik i kontakt telefon: Dimitrije Simić, +381 63 882 60 27</h4>
      </div>
    </div>
  );
}

export default App;
