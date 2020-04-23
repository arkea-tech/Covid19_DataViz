import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart } from 'react-charts';
import GoogleMapReact from 'google-map-react';

function App() {

  const [test, setTest] = useState(600);
  const [death, setDeath] = useState(300);
  const [rec, setRec] = useState(100);
  const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '50%'
  }}>
    {text}
  </div>
);

  function DispMap () {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={{lat: 59.95, lng: 30.33}}
          defaultZoom={0}
        >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
        />
      </GoogleMapReact>
      </div>
    );
  }

  function MyChart() {
    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          data: [{ x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 18 }]
        }
      ],
      []
    )

    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )

    return (
      <div
        style={{
          width: '400px',
          height: '300px'
        }}
      >
        <Chart data={data} axes={axes} />
      </div>
    )
  }

  function changetest() {
    setTest(test + 3)
    console.log('The link was clicked.');
  }

  function UpdateInfos(death, rec, tot) {
    console.log("hello")
    setDeath(death);
    setRec(rec);
    setTest(tot)
  }

  function ReptileList() {
    const countries = ['france', 'italie', 'espagne'];

    const test = [{
			"country": "france",
			"tot": 30,
			"death": 10,
			"rec": 15
		},
		{
			"country": "italy",
			"tot": 38,
			"death": 12,
			"rec": 8
		},
		{
			"country": "esapgne",
			"tot": 33,
			"death": 12,
			"rec": 13
		}
	];

    const nb = 30;
    const tab = [30, 33, 36];

    return (
      <p>
        {test.map(list => (
          //<li key={list}>
            <button className="button" onClick={UpdateInfos.bind(this, list.death, list.rec, list.tot)}>
              {list.country}: {list.tot}
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
            {DispMap()}
      </header>
      <header className="Chart-header">
        <p>
            Case history<br />
            {MyChart()}
        </p>
      </header>
    </div>
  );
}

export default App;
