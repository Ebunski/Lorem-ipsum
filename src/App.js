import React, { useRef, useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const inputRef = useRef();

  // setText(data[0]);
  function handleCount() {
    const paragraphs = inputRef.current.value;
    setCount(paragraphs);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let paragraphLength = parseInt(count); //note count is initially a string
    if (count < 1) {
      paragraphLength = 1;
    }
    if (count > data.length) {
      paragraphLength = data.length;
    }
    console.log(paragraphLength);
    const lorem = data.slice(0, paragraphLength);
    setText(lorem);
  }

  const bodyText = text.map((x, index) => (
    <div key={index} className="result">
      <p>{x}</p>
    </div>
  ));

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paragraps">Paragraphs:</label>
        <input
          id="paragraphs"
          type={"number"}
          onChange={handleCount}
          ref={inputRef}
          value={count}
        />
        <button className="btn">generate</button>
      </form>
      <article>{bodyText}</article>
    </section>
  );
}

export default App;
