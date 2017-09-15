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
	  "http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2016/11/18150811/1.-Jon-Georg-Dale.jpg",
	key:"1",
	gender:"m"
  },
  {
	firstName: "Leif",
	lastName: "Forsell",
	img:
	  "http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2016/11/18150813/2-Leif-Forsell.jpg",
	key:"2",
	gender:"m"
  },
  {
	firstName: "Pål",
	lastName: "Farstad",
	img:
	  "http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2016/11/18150815/3-Paal-Farstad.jpg",
	key:"3",
	gender:"m"
  },
  {
	firstName: "Familien",
	lastName: "Johannson",
	img:
	  "http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2016/08/11-Johannson.jpg",
	key:"4",
	gender:"m"
  },
  {
	firstName: "Lars Petter",
	lastName: "Bartnes",
	img:
	  "http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2016/11/18150816/5-Lars-Petter-Bartnes.jpg",
	key:"5",
	gender:"m"
  },
  {
	firstName: "Knut Arild",
	lastName: "Hareide",
	img:
	  "http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2016/11/18150818/6-Knut-Arild-Hareide.jpg",
	key:"6",
	gender:"m"
  },
  {
	firstName: "Ulven",
	lastName: "",
	img:
	  "http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2016/11/18150819/7.-Ulv.jpg",
	key:"7",
	gender:"none"
  },
  {
	firstName: "Innkjøpsidrektørene",
	lastName: "",
	img:
	  "http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2016/11/18150942/8-matvarekjedene.jpg",
	key:"8",
	gender:"none"
  },
  {
	firstName: "Per Gunnar",
	lastName: "Skorge",
	img:
	  "http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2016/11/18150944/9-Per-Skorge.jpg",
	key:"9",
	gender:"m"
  },
  {
	firstName: "Hanne",
	lastName: "Refsholt",
	img:
	  "http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2016/11/18150946/10-Hanne-Refsholt.jpg",
	key:"10",
	gender:"f"
  },
  {
	firstName: "Melkeroboten",
	lastName: "",
	img:
	  "http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2016/11/18150947/11-Melkeroboten.jpg",
	key:"11",
	gender:"none"
  }
];


ReactDOM.render(<App names={names} />, document.getElementById('root'));
//registerServiceWorker();
