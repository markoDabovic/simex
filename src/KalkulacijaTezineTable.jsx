import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { sirinaAluTable, debljinaAluTable } from "./bazaPodataka";
import Button from "@mui/material/Button";
import "./KalkulacijaTezineTable.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function KalkulacijaTezineTable() {
  const [sirina, setSirina] = useState(1000);
  const [debljina, setDebljina] = useState(0.5);
  const [duzina, setDuzina] = useState(0);
  const [rezultat, setRezultat] = useState(0);

  const izmena = (vr, tip) => {
    switch (tip) {
      case "sirina":
        setSirina(parseInt(vr));
        break;
      case "debljina":
        setDebljina(parseFloat(vr));
        break;
      default:
        console.log("greska");
    }
  };

  const ukupnaSuma = () => {
    setRezultat(sirina * debljina * duzina * 2.705);
  };

  const izmenaDuzine = (e) => {
    setDuzina(parseInt(e.target.value));
  };

  return (
    <div className="container">
      <h1>
        Kalkulator težine aluminijumskog lima - referentna legura Al 1050 težine
        2.705 g/cm<sup>3</sup>
      </h1>
      <h1>Izaberite širinu aluminijumske table/rolne u mm:</h1>
      <Dropdown lista={sirinaAluTable} izmena={izmena} tip={"sirina"} />
      <h1>Izaberite debljinu aluminijumske table/rolne u mm:</h1>
      <Dropdown lista={debljinaAluTable} izmena={izmena} tip={"debljina"} />
      <h1>Unesite dužinu aluminijumske table/rolne u milimetrima:</h1>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Duzina"
          variant="outlined"
          onChange={(e) => izmenaDuzine(e)}
        />
      </Box>
      <div className="ukupnaSumaButton">
        <Button variant="contained" onClick={ukupnaSuma}>
          Ukupna suma
        </Button>
      </div>
      <div className="rezultatText">
        {rezultat > 0 &&
          `${`Težina zadate table lima iznosi: ${rezultat.toFixed(
            3
          )} kilograma.`}`}
      </div>
    </div>
  );
}
