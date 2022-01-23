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
        <h1>Unesite precnik cevi u cm</h1>
        <select onChange={(e) => izmenaPrecnika(e)}>
          <option value="10">10</option>
          <option value="11">11</option>
        </select>
        <h1>Unesite ukupan preklop cevi</h1>
        <select onChange={(e) => izmenaPreklop(e)}>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <h1>Ukupna duzina lima za secenje iznosi : {rezultat.toFixed(1)}</h1>
      </div>
      <div className="kontakt">
        <h2>
          Simex TAS doo, termoizolacija mineralnom vunom i limom, 14253 Osečina{" "}
        </h2>
        <h4>Maticni broj: 20889748 poreski broj: 107883953</h4>
        <h4>Zastupnik i kontakt telefon: Dimitrije Simic, +381 63 882 60 27</h4>
      </div>
    </div>
  );
}

export default App;
