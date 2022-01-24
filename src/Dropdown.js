import React from "react";

export default function Dropdown(props) {
  const opcije = props.lista.map((el, index) => {
    return el.selected ? (
      <option key={index} value={el.vrednost} selected="selected">
        {el.ispis}
      </option>
    ) : (
      <option key={index} value={el.vrednost}>
        {el.ispis}
      </option>
    );
  });
  return (
    <select onChange={(e) => props.izmena(e.target.value, props.tip)}>
      {opcije}
    </select>
  );
}
