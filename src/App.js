import React, { Component } from 'react';
import './App.css';


var show = ["m", "f", "none"];
// const areas = ["alt","landbruk", "politikk", "næringsliv"];
// const counties = ["i hele landet","på Østlandet", "på Vestlandet",
// "i Nord-Norge", " i Trøndelag", " på Sørlandet"];

export default class App extends Component{
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        console.log("%c👋 Hello!\n","font-size:2em;");
    }

    handleChange(event)
    {
        if ( event.target.value === "menn") {
            show = ["m"];
        }else if ( event.target.value === "kvinner") {
            show = ["f"];
        }else{
            show = ["m", "f", "none"];
        }
        this.forceUpdate();
    }

    filterGender(name)
    {
        return show.indexOf(name.gender) > -1;
    }

    render()
    {
        return(
            <div className="content">
                <FilterBox handleChange={this.handleChange}/>
                {this.props.names.filter(this.filterGender).map(name =>
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
                    {this.props.id} - {this.props.info.firstName} {this.props.info.lastName} <br />
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
            <div className = "biographyName"> {this.props.id} - {this.props.info.firstName} {this.props.info.lastName}  </div>
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
            <div className="filterBox">Vis meg <SelectArea items = {this.state.types} style={{width: 120}} onChange={this.props.handleChange}/> på lista
            {/*innen <SelectArea items={areas} style={{width: 180}}/> som bor
            <SelectArea items = {counties} style={{width: 220}}/>*/}.
            </div>
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
class SelectArea extends React.Component{
  render()
  {
    const listItems = this.props.items.map((item,key) =>
        <option value={item[0]} key={key}>{item[0]}</option>
    );
    return(
        <select className="selectArea" onChange={this.props.onChange} style={this.props.style}>
        {listItems}
        </select>
    );
  }
};
