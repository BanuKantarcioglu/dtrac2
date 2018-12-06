import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

const PEOPLE=[
  {id:1,name:"banu",pno:"123456",jobdescription:"handmaid of cats",active:true,numberofdocs:1,documents:[{type:"cathandbook",startdate:"2009-09-13",endate:"2050-12-31",status:"active"}]},
  {id:2,name:"obi van",pno:"9999",jobdescription:"jedi master",active:false,numberofdocs:3, documents:[{type:"lightsabermanual",startdate:"1976-07-01",endate:"2001-06-15",status:"processing"},{type:"howtoloseabattle",startdate:"2010-05-13",endate:"2018-12-30",status:"active"},{type:"a new beginning",startdate:"2017-01-12",endate:"2017-01-12",status:"completed"}]},
  {id:3,name:"Dr. Seuss",pno:"00000",jobdescription:"stripey hat wearer",active:true,numberofdocs:0,documents:[]}
];

ReactDOM.render(<App people={PEOPLE}/>, document.getElementById('root'));
