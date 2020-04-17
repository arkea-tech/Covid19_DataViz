import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [test, setTest] = useState(600);
  const [death, setDeath] = useState(300);
  const [rec, setRec] = useState(100);

  function changetest() {
    setTest(test + 3)
    console.log('The link was clicked.');
  }

  function UpdateInfos(nb, str) {
    console.log("hello")
    console.log(nb)
    if (str == 'italie')
      nb += 3;
    if (str == 'espagne')
      nb += 6;
    setDeath(nb);
    setRec(nb);
  }

  function ReptileList() {
    const countries = ['france', 'italie', 'espagne'];
    const nb = 30;
    const tab = [30, 33, 36];

    return (
      <p>
        {countries.map(reptile => (
          //<li key={reptile}>
            <button className="button" onClick={UpdateInfos.bind(this, nb, reptile)}>
              {reptile}: {nb}
            </button>
          //</li>
        ))}
      </p>
    );
  }

  return (
    <div className="App">
    <header className="Back-header">
    </header>
      <header className="Total-header">
        <p>
            Total case:<br />
            {test}
        </p>
      </header>
      <header className="Death-header">
        <p>
            Total deaths:<br />
            {death}
        </p>
      </header>
      <header className="Rec-header">
        <p>
            Total recovered:<br />
            {rec}
        </p>
      </header>
      <header className="List-header">
            {ReptileList()}
      </header>
      <header className="Map-header">
        <p>
            Emplacement pour le carte
        </p>
        <button onClick={changetest}>
          Test Button
        </button>
      </header>
      <header className="Chart-header">
        <p>
            Emplacement pour graphique
        </p>
      </header>
    </div>
  );
}

export default App;
