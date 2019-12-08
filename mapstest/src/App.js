import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './MapsContainer';
import ToplaContainer from './ToplaContainer';
import Testler from './components/testler';
import Navbar from './components/navbar';
import PropsTest from './components/propstest'
import PropTipleri from './components/proptipleri'

function App() {
  return (
    <div className="container">
      <div className="row">test</div>
      {/* <MapContainer/> */}
      {/* <ToplaContainer/> */}
      {/* <Testler/> */}
      <Navbar title="Onsel App"/>
      <PropTipleri title="Yağmur App"/>
      <PropTipleri/>
      <PropsTest
        name="Önsel AYDIN"
        salary="5000"
        department="Software"
      />
    </div>
  );
}

export default App;
