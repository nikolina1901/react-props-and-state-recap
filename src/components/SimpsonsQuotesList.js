import axios from "axios";
import React from "react";
import RandomQuotes from "./Helper";
import Quotes from "./Quotes";

function SimpsonsQuoteList() {
  const [quotes, setQuote] = React.useState([]);

  function randerQuotes(quoteCount) {
    axios
      .get(
        `https://simpsons-quotes-api.herokuapp.com/quotes?count=${quoteCount}`
      )
      .then(function (response) {
        // handle success
        setQuote([...quotes, ...response.data]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  return (
    <div>
      <h1> SimpsonsQuoteList</h1>
      <button onClick={() => randerQuotes(10)}>Return 10 Quotes</button>
      <button onClick={() => randerQuotes(5)}>Return 5 Quotes</button>
      <button onClick={() => setQuote([])}>Reset</button>
      {quotes.map(function (item, index) {
        return <Quotes key={index} {...item} />;
      })}
      {/* <Quotes
        quote="By chilling my loins I increase the chances of impregnating my wife."
        character="Apu Nahasapeemapetilon"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"
      /> */}
    </div>
  );
}
export default SimpsonsQuoteList;
