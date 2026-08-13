import React from "react";

export default function MessageTicker({ words }) {
  return (
    <div className="c-b-message">
      <div className="c-b-message__track">

        {[...words, ...words].map((word, i) => (
          <React.Fragment key={`first-${i}`}>
            <span className="c-b-message__word">{word}</span>
            <span className="c-b-message__bullet">●</span>
          </React.Fragment>
        ))}

      </div>
    </div>
  );
}