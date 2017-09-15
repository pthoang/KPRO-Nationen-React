import React, { Component } from 'react';
import './App.css';

var show = ["m", "f", "none"];

var bioText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, orci et sollicitudin vestibulum, nibh tellus placerat mauris, sed gravida est urna vitae ex. Donec odio lorem, luctus et purus at, consectetur malesuada nunc. Proin lacus justo, varius luctus pulvinar aliquam, consequat vitae dui. Suspendisse eu est id turpis bibendum vestibulum. Sed varius, est quis dictum egestas, libero elit condimentum ligula, ut placerat dolor urna eget massa. Pellentesque eget est nec est congue aliquet nec sed lacus. Nulla vel ultrices metus. Aliquam eget ex eu nisl fringilla ornare. Nullam a mauris sit amet lectus hendrerit suscipit eget vel est. Maecenas dapibus metus metus, lacinia feugiat ipsum placerat id. Nulla congue pretium elit, eu pellentesque nunc placerat ac. Aenean ut est vitae leo fermentum maximus. Nunc bibendum sodales risus, id ultrices est viverra ac."

export default class App extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		if ( event.target.value === "menn"){
			show = ["m"];
		}else if ( event.target.value === "kvinner") {
			show = ["f"];
		}else{
			show = ["m", "f", "none"];
		}
		console.log(event.target.value);
		this.forceUpdate();
	}
	filterGender(name){
		return show.indexOf(name.gender) > -1;
	}
	render() {
		return(
			<div>
				<FilterBox handleChange={this.handleChange}/>
				{this.props.names.filter(this.filterGender).map(name =>
				<Card key={name.key} info={name} id={name.key} />)}
			</div>)
	};
  }

class Card extends Component{
	constructor(props) {
		super(props);
		this.state = {isExpanded:false};
		this.clickHandler = this.clickHandler.bind(this);
	}
	clickHandler(){
		console.log(this.state.isExpanded);
		this.setState({isExpanded:!this.state.isExpanded})
	}
	render(){
		if ( !this.state.isExpanded) {
			return( <div className="infoCard" id={this.props.id} onClick={this.clickHandler}>
				<img className="bgrImg" src={this.props.info.img} />
				<CardText info={this.props.info} id ={this.props.id}/>
				</div>)
		}else{
			return( <div className="infoCard_expanded" id={this.props.id} onClick={this.clickHandler}>
				<img src={this.props.info.img} className="bgrImg_expanded" />
				<div className = "biographyName"> {this.props.id} - {this.props.info.firstName} {this.props.info.lastName}  </div>
				<div className="biographyText">{bioText} </div>
				</div>)
		}
	}
}

class CardText extends Component{
	render(){
		return(<div className="cardText">
					{this.props.id} - {this.props.info.firstName} {this.props.info.lastName} <br />
					<span id="nameText">
					<hr />
					{/*this.props.info.firstName*/} {/*this.props.info.lastName*/}
					Stillingstittel, Bosted
					</span>
				</div>);
	}
}

const types = ["alle", "menn", "kvinner"];
const areas = ["alt","landbruk", "politikk", "næringsliv"];
const counties = ["i hele landet","på Østlandet", "på Vestlandet", "i Nord-Norge", " i Trøndelag", " på Sørlandet"];

class FilterBox extends React.Component{
	render(){
		return(
			<div className="filterBox">Vis meg <SelectArea items = {types} style={{width: 120}} onChange={this.props.handleChange}/> på lista
			{/*innen <SelectArea items={areas} style={{width: 180}}/> som bor
			<SelectArea items = {counties} style={{width: 220}}/>*/}.
			</div>
		);
	}
};

class SelectArea extends React.Component{
  render(){
	const listItems = this.props.items.map((item) =>
		<option value={item}>{item}</option>
	);
	return(
		<select className="selectArea" onChange={this.props.onChange} style={this.props.style}>
		{listItems}
		</select>
	);
  }
};
