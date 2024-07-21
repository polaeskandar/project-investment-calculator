import React from "react";

import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  const initialInvesment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  const resultsDataList = resultsData.map((yearData) => {
    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvesment;
    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

    return (
      <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.valueEndOfYear)}</td>
        <td>{formatter.format(yearData.interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalAmountInvested)}</td>
      </tr>
    );
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{resultsDataList}</tbody>
    </table>
  );
};

export default Results;
