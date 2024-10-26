import React, { useEffect, useState } from 'react';

import './game3connectinglink.css';

const Game3ConnectingLink = () => {
  const [financialData, setFinancialData] = useState({
    income: 0,
    expense: 0,
    payday: 0,
    assets: {
      property: 0,
      vehicles: 0,
      other: 0,
    },
    liabilities: {
      mortgage: 0,
      loans: 0,
      otherliab: 0,
    },
    incBrac: '',
    urlIden: '',
  });

  useEffect(() => {
    const mathValue = Math.random();
    let flag;

    if (mathValue <= 1 / 3) flag = 0;
    else if (mathValue > 1 / 3 && mathValue <= 2 / 3) flag = 1;
    else flag = 2;

    setIncome(flag);
    
    function setIncome(flag) {
      let income, expense, payday;
      const assets = {
        property: 0,
        vehicles: 0,
        other: 0,
      };
      const liabilities = {
        mortgage: 0,
        loans: 0,
        otherliab: 0,
      };
      let incBrac = '';
      let urlIden = '';

      if (flag === 0) {
        urlIden = "high";
        income = 150000;
        expense = 100000;
        payday = income - expense;
        assets.property = 25000000;
        assets.vehicles = 12000000;
        assets.other = 1000000;
        liabilities.mortgage = 1000000;
        liabilities.loans = 0;
        liabilities.otherliab = 300000;
        incBrac = "HIGH Income Bracket";
      } else if (flag === 1) {
        urlIden = "";
        income = 65000;
        expense = 40000;
        payday = income - expense;
        assets.property = 6000000;
        assets.vehicles = 1000000;
        assets.other = 130000;
        liabilities.mortgage = 1000000;
        liabilities.loans = 8000000;
        liabilities.otherliab = 200000;
        incBrac = "MID Income Bracket";
      } else {
        urlIden = "low";
        income = 30000;
        expense = 21000;
        payday = income - expense;
        assets.property = 0;
        assets.vehicles = 0;
        assets.other = 15000;
        liabilities.mortgage = 0;
        liabilities.loans = 300000;
        liabilities.otherliab = 60000;
        incBrac = "LOW Income Bracket";
      }

      // Store variables in local storage
      localStorage.setItem("income", income);
      localStorage.setItem("expense", expense);
      localStorage.setItem("payday", payday);
      localStorage.setItem("assets", JSON.stringify(assets));
      localStorage.setItem("liabs", JSON.stringify(liabilities));
      localStorage.setItem("inc_brac", incBrac);

      setFinancialData({ income, expense, payday, assets, liabilities, incBrac, urlIden });
    }
  }, []);

  const { income, expense, payday, assets, liabilities, incBrac, urlIden } = financialData;

  return (
    <div className="wrapperconn">
      <div className="containerconn">
        <h3><b>{incBrac}</b></h3>
        <p className="para" style={{ marginBottom: '5px' }}>
          <br />
          You have the following financial components with you: <br />
          <b>Income:</b>&nbsp;&nbsp; Rs. {income}<br />
          <b>Expenses:</b>&nbsp;&nbsp; Rs. {expense}<br />
          <b>PayDay:</b>&nbsp;&nbsp; Rs. {payday}<br />
          <br />
          <div className="display_ass_liabs">
            <div className="disp_ass">
              <b>Assets</b>
              <br />
              Property:&nbsp;&nbsp; Rs. {assets.property}<br />
              Vehicles:&nbsp;&nbsp; Rs. {assets.vehicles}<br />
              Other:&nbsp;&nbsp; Rs. {assets.other}
            </div>
            <div className="disp_liabs">
              <b>Liabilities</b>
              <br />
              Mortgage:&nbsp;&nbsp; Rs. {liabilities.mortgage}<br />
              Loans:&nbsp;&nbsp; Rs. {liabilities.loans}<br />
              Other:&nbsp;&nbsp; Rs. {liabilities.otherliab}
            </div>
          </div>
        </p>
        <div className="buttons">
          <a href='/features/ruleboard'>
            <input type="button" id="back_btn" value="Back" />
          </a>
          <button
            id="start_btn"
            onClick={() => {
              if (urlIden === "high") {
                window.location.href = './public/gamehigh.html';
              } else if (urlIden === "low") {
                window.location.href = 'gamelow.html';
              } else {
                window.location.href = 'game.html';
              }
            }}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game3ConnectingLink;
