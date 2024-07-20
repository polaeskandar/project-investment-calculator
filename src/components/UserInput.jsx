import React, { useState } from "react";

const UserInput = ({ onChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            onChange={(event) => onChange("initialInvestment", event.target.value)}
            value={userInput.initialInvestment}
            type="number"
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            onChange={(event) => onChange("annualInvestment", event.target.value)}
            value={userInput.annualInvestment}
            type="number"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            value={userInput.expectedReturn}
            type="number"
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            onChange={(event) => onChange("duration", event.target.value)}
            value={userInput.duration}
            type="number"
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
