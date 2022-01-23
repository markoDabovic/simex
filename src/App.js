import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [precnik, setPrecnik] = useState(10);
  const [preklop, setPreklop] = useState(3);
  const [rezultat, setRezultat] = useState(0);

  const [sirina, setSirina] = useState(1000);
  const [debljina, setDebljina] = useState(0.8);
  const [duzina, setDuzina] = useState(0);
  const [rez2, setRez2] = useState(0);

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

  const izmenaSirine = (e) => {
    setSirina(parseInt(e.target.value));
    rez2Funk(parseInt(e.target.value), debljina, duzina);
  };

  const izmenaDebljine = (e) => {
    setDebljina(parseFloat(e.target.value));

    rez2Funk(sirina, parseFloat(e.target.value), duzina);
  };

  const izmenaDuzine = (e) => {
    setDuzina(parseInt(e.target.value));
    rez2Funk(sirina, debljina, parseInt(e.target.value));
  };

  const rez2Funk = (s, deb, duz) => {
    setRez2(s * deb * duz * 2.705);
  };

  //ukupanRezultat();
  return (
    <div className="App">
      <div>
        <div>
          <h1>Unesite prečnik cevi u cm:</h1>
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
          <h1>Unesite ukupan preklop cevi u cm:</h1>
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
            Ukupna dužina table lima za sečenje iznosi: {rezultat.toFixed(1)}{" "}
            cm.
          </h1>
          <hr />
        </div>
        <div>
          <h1>
            Kalkulator težine aluminijumskog lima - referentna legura Al 1050
            težine 2.705 g/cm<sup>3</sup>
          </h1>
          <h1>Izaberite širinu aluminijumske table/rolne u mm:</h1>
          <select onChange={(e) => izmenaSirine(e)}>
            <option value="1000">1000</option>
            <option value="1250">1250</option>
          </select>
          <h1>Izaberite debljinu aluminijumske table/rolne u mm:</h1>
          <select onChange={(e) => izmenaDebljine(e)}>
            <option value="0.5">0.5</option>
            <option value="0.6">0.6</option>
            <option value="0.7">0.7</option>
            <option value="0.8">0.8</option>
            <option value="0.9">0.9</option>
            <option value="1.0">1.0</option>
            <option value="1.1">1.1</option>
            <option value="1.2">1.2</option>
          </select>
          <h1>Unesite dužinu aluminijumske table/rolne u milimetrima:</h1>
          <input onChange={(e) => izmenaDuzine(e)} />
          {/* <h1>
            Težina zadate table lima iznosi: {(rez2 / 1000000).toFixed(3)}{" "}
            kilograma.
          </h1> */}
          {!isNaN(rez2) ? (
            <h1>
              Težina zadate table lima iznosi: {(rez2 / 1000000).toFixed(3)}{" "}
              kilograma.
            </h1>
          ) : (
            <h1>Unesite ispravan broj u milimetrima!</h1>
          )}
          <hr />
        </div>
      </div>
      <div className="kontakt">
        <h2>
          Simex TAS doo, termoizolacija mineralnom vunom i limom, 14253 Osečina{" "}
        </h2>
        <h4>Zastupnik i kontakt telefon: Dimitrije Simić +381 63 882 60 27</h4>
      </div>
    </div>
  );
}

export default App;
