import { useState } from "react";

export const Accordion = ({ active, setIndex, index }) => {
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginTop: "10px",
      }}
    >
      {/* Accordion Header */}
      <div
        onClick={() => (active ? setIndex() : setIndex(index))}
        style={{
          cursor: "pointer",
          background: "lightgray",
          padding: "10px",
          textAlign: "left",
        }}
      >
        Hello, how are you?
        {!active ? <span>&#9660;</span> : <span>&#9650;</span>}
      </div>

      {/* Accordion Content */}
      <div
        className={`accordion-content ${!active ? "collapsed" : "expanded"}`}
      >
        <p>I am fine, Thanks for asking!</p>
      </div>
    </div>
  );
};
