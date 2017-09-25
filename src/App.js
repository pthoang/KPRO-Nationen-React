import React, { Component } from 'react';
import './App.css';


// const areas = ["alt","landbruk", "politikk", "næringsliv"];
// const counties = ["i hele landet","på Østlandet", "på Vestlandet",
// "i Nord-Norge", " i Trøndelag", " på Sørlandet"];

export default class App extends Component{
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.filterGender = this.filterGender.bind(this);
        this.filterName = this.filterName.bind(this);
        this.state = {show:["m", "f", "none"],
                        nameSearch: ""}
        console.log("%c👋 Hello!\n","font-size:2em;");
    }

    handleChange(event)
    {
        if ( event.target.name === "genderBox"){
            if ( event.target.value === "menn") {
                this.setState({show:["m"]});
            }else if ( event.target.value === "kvinner") {
                this.setState({show:["f"]});
            }else{
                this.setState({show:["m","f","none"]});
            }
            this.forceUpdate();
        }else if (event.target.name === "nameSearch") {
            this.setState({nameSearch:event.target.value});
            console.log(this.state.nameSearch);
        }
    }

    filterGender(name)
    {
        return this.state.show.indexOf(name.gender) > -1;
    }

    filterName(name)
    {
        if (this.state.nameSearch.length < 1){
            return true;
        }else{
            return name.firstName.toLowerCase().indexOf(this.state.nameSearch.toLowerCase()) !== -1;
        }

    }

    render()
    {
        return(
            <div className="content">
                <FilterBox handleChange={this.handleChange}/>
                {this.props.names.filter(this.filterGender)
                    .filter(this.filterName)
                    .map(name =>
                <Card key={name.key} info={name} id={name.key} />)}
            </div>)
    };
}

class Card extends Component{
    constructor(props)
    {
        super(props);
        this.state = {isExpanded:false};
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler()
    {
        this.setState({isExpanded:!this.state.isExpanded})
    }

    render()
    {
        if ( !this.state.isExpanded) {
            return( <div className="infoCard" id={this.props.id} onClick={this.clickHandler}>
                <img className="bgrImg" src={this.props.info.img} alt={this.props.info.firstName} />
                <CardText info={this.props.info} id ={this.props.id}/>
                </div>)
        }else{
            return(<div className="infoCardExpandedBgr">
                <div className="infoCardExpanded" id={this.props.id} onClick={this.clickHandler} >
                <ExpandedCardContent id={this.props.id} info={this.props.info} />
                </div>
                </div>)
        }
    }
}

class CardText extends Component{
    render()
    {
        return(<div className="cardText">
                    {this.props.id} - {this.props.info.firstName}<br />
                    <span id="nameText">
                    <hr />
                    {/*this.props.info.firstName*/} {/*this.props.info.lastName*/}
                    {this.props.info.profession}
                    </span>
                </div>);
    }
}

class ExpandedCardContent extends Component{
    // constructor(props){
    //     super(props)
    // }

    render()
    {
        const news = this.props.info.newsItems.map(item =>
            <NewsItem items={item} key={item.key} />
        );
        return(<span>
        <section className="infoCardExpandedColumn">
            <div className = "biographyName"> {this.props.id} - {this.props.info.firstName}</div>
        </section>
        <section className="infoCardExpandedColumn">
            <img src={this.props.info.img} className="bgrImgExpanded" alt={this.props.info.firstName} />
            <div className="biographyText">{this.props.info.bio} </div>
        </section>
        <hr/>
        <section className="newsFlex">
            {news}
        </section>
        <hr/>
        </span>
        );
    }
}

class FilterBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {types: [["alle",0], ["menn",1], ["kvinner",2]] };
    }
    render()
    {
        return(
            <div className="filterBox">Vis meg <SelectArea items = {this.state.types} style={{width: 120}} name="genderBox" onChange={this.props.handleChange}/> på lista.
            <br/>Søk: <SearchArea onChange={this.props.handleChange} name={"nameSearch"}/>
            {/*som bor<SelectArea items = {counties} style={{width: 220}}/>*/}
            </div>
        );
    }
};

class SelectArea extends React.Component{
  render()
  {
    const listItems = this.props.items.map((item,key) =>
        <option value={item[0]} key={key}>{item[0]}</option>
    );
    return(
        <select className="selectArea" onChange={this.props.onChange} style={this.props.style} name={this.props.name}>
        {listItems}
        </select>
    );
  }
};

class SearchArea extends React.Component{
  render(){
    return(
      <input className="searchArea" type="text" name={this.props.name}  onChange={this.props.onChange} defaultValue="" />
      );
  }
};
class NewsItem extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render()
    {
        return(
        <div className="newsItem" >
            <img src={this.props.items.img} alt="placeholder" />
        <a href="http://www.nationen.no" target="_blank" rel="noopener noreferrer">
        <div className="newsColumn" >
            <span className="newsTitle" >{this.props.items.title}</span>
            <span className="newsIngress">{this.props.items.lead}</span>
        </div>
        </a>
        </div>
        );
    }
}
