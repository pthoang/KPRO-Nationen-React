import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import registerServiceWorker from './registerServiceWorker';

const names = [
  {
	firstName: "Jon Georg",
	lastName: "Dale",
	img:
	  require('./img/Jon-Georg-Dale.jpg'),
	key:"1",
	gender:"m"
  },
  {
	firstName: "Leif",
	lastName: "Forsell",
	img:
	  require('./img/Leif-Forsell.jpg'),
	key:"2",
	gender:"m"
  },
  {
	firstName: "Pål",
	lastName: "Farstad",
	img:
	  require('./img/Paal-Farstad.jpg'),
	key:"3",
	gender:"m"
  },
  {
	firstName: "Familien",
	lastName: "Johannson",
	img:
	  require('./img/Johannson.jpg'),
	key:"4",
	gender:"m"
  },
  {
	firstName: "Lars Petter",
	lastName: "Bartnes",
	img:
	  require('./img/Lars-Petter-Bartnes.jpg'),
	key:"5",
	gender:"m"
  },
  {
	firstName: "Knut Arild",
	lastName: "Hareide",
	img:
	  require('./img/Knut-Arild-Hareide.jpg'),
	key:"6",
	gender:"m"
  },
  {
	firstName: "Ulven",
	lastName: "",
	img:
	  require('./img/Ulv.jpg'),
	key:"7",
	gender:"none"
  },
  {
	firstName: "Innkjøpsidrektørene",
	lastName: "",
	img:
	  require('./img/matvarekjedene.jpg'),
	key:"8",
	gender:"none"
  },
  {
	firstName: "Per Gunnar",
	lastName: "Skorge",
	img:
	  require('./img/Per-Skorge.jpg'),
	key:"9",
	gender:"m"
  },
  {
	firstName: "Hanne",
	lastName: "Refsholt",
	img:
	  require('./img/Hanne-Refsholt.jpg'),
	key:"10",
	gender:"f"
  },
  {
	firstName: "Melkeroboten",
	lastName: "",
	img:
	  require('./img/Melkeroboten.jpg'),
	key:"11",
	gender:"none"
  }
];


ReactDOM.render(<App names={names} />, document.getElementById('root'));
//registerServiceWorker();
