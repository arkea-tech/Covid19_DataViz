import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart } from 'react-charts';
import GoogleMapReact from 'google-map-react';
import MapContainer from './map_Container'
import axios from 'axios';
import all from './assets/all'
import chartContainer from './chart_Container';
import ZingChart from 'zingchart-react';

function App() {

  const [test, setTest] = useState(600);
  const [death, setDeath] = useState(300);
  const [rec, setRec] = useState(100);
  const [zoom, setZoom] = useState(0);
  const [lat, setLat] = useState(48.8566);
  const [long, setLong] = useState(2.3522);
  const [chartData, setChartData] = useState([]);

  const AnyReactComponent = ({ text }) => (
    <div>
      <header className="Marker-header">
        <p>
            {text}
        </p>
      </header>
    </div>
  );

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function DispMap () {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDT8niDsJMDOvWCmxCh4n7BCKxpiZleQIg'}}
          defaultCenter={{lat: lat, lng: long}}
          defaultZoom={zoom}
        >
        <AnyReactComponent
          lat={lat}
          lng={long}
          zoom={zoom}
          text={'fucked'}
          radius={1200}
        />
        <AnyReactComponent
          lat={59.96}
          lng={30.33}
          text={'fuck'}
        />
      </GoogleMapReact>
      </div>
    );
  }

  function MyChart() {

    var test = []
    for (let i = 0; i < chartData.length; i++) {
      test[i] = chartData[i].cases;
    }
    var fuck = [getRandomInt(30), 2, 3]
    console.log('test: ', chartData)
    return (
      <ZingChart data={{ type: 'bar', series: [{ values: test}]}} style={{height: '30%', width: '10%'}}/>
    )
  }

  function changetest() {
    setTest(test + 3)
    console.log('The link was clicked.');
  }

  function UpdateInfos(death, rec, tot, chart) {
    console.log("hello")
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'http://localhost:3000/api/stuff')
    // send the request
    xhr.send()
    setDeath(death);
    setRec(rec);
    setTest(tot);
    setZoom(10);
    setLat(1);
    setChartData(chart);
  }

  function CountryList() {

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

    const data = all

    return (
      <p style={{maxHeight: '60vh', overflowY: 'auto', overflowX: 'hidden'}}>
        {data.map(list => (
          //<li key={list}>
            <button className="button" onClick={UpdateInfos.bind(this, list.total_dead, -1  , list.total_case, list.detail)}>
              {list.country_name}: {list.total_case}
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
            {CountryList()}
      </header>
      <header className="Map-header">
            <MapContainer data={all}/>
      </header>
      <header className="Chart-header">
            {MyChart()}
      </header>
    </div>
  );
}

export default App;
