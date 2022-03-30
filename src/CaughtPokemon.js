import React, { useState } from "react";

function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    setCaught((currentCaught) => currentCaught.concat("firebird"));
  }

  return (
    <p>
      Caught {caught.length} Pokemon on {props.date}
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((pokemon) => {
          return <li>{pokemon}</li>;
        })}
      </ul>
    </p>
  );
}

export default CaughtPokemon;
