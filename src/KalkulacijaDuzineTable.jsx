import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { listPreklopa, listaPrecnika } from "./bazaPodataka";
import Button from "@mui/material/Button";
import "./KalkulacijaDuzineTable.css";

export default function KalkulacijaDuzineTable() {
  const [precnik, setPrecnik] = useState(14);
  const [preklop, setPreklop] = useState(1);
  const [rezultat, setRezultat] = useState(0);

  const izmena = (vr, tip) => {
    switch (tip) {
      case "precnik":
        setPrecnik(parseInt(vr));
        break;
      case "preklop":
        setPreklop(parseFloat(vr));
        break;
      default:
        console.log("greska");
    }
  };

  const ukupnaSuma = () => {
    setRezultat(precnik * Math.PI + preklop);
  };

  return (
    <div className="container">
      <h1>Unesite prečnik cevi u cm:</h1>
      <Dropdown lista={listaPrecnika} izmena={izmena} tip={"precnik"} />
      <h1>Unesite ukupan preklop cevi u cm:</h1>
      <Dropdown lista={listPreklopa} izmena={izmena} tip={"preklop"} />
      <div className="ukupnaSumaButton">
        <Button variant="contained" onClick={ukupnaSuma}>
          Ukupna suma
        </Button>
      </div>
      <div className="rezultatText">
        {rezultat > 0 &&
          `${`Ukupna dužina table lima za sečenje iznosi: ${rezultat.toFixed(
            1
          )} cm.`}`}
      </div>
    </div>
  );
}
