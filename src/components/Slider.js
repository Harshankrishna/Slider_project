import React, { useState } from "react";
import People from "./Data";

const Slider = () => {
  const [state, setState] = useState(0);
  const { id, name, image, title, quote } = People[state];
  //   const playSlider = (slide) => {};
  const Next = () => {
    setState((state + 1) % People.length);
  };
  const Prev = () => {
    const newState = state - 1;
    if (newState < 0) {
      setState(People.length - 1);
    } else {
      setState(state - 1);
    }
  };

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>Words of Legends
          </h2>
        </div>
        <div className="section-center">
          <div key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <i className="fa fa-quote-right" id="icon"></i>
          </div>
          <button className="prev" onClick={Prev}>
            <i className="fas fa-caret-left"></i>
          </button>
          <button className="next" onClick={Next}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default Slider;
