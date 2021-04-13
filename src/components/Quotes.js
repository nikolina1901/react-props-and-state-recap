import React from "react";

function Quotes(props) {
  return (
    <div>
      <h1>{props.quote}</h1>
      <img src={props.image} alt={props.character} />
      <p>{props.character}</p>
    </div>
  );
}
export default Quotes;
