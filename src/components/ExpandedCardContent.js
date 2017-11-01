import React from 'react';
//import {NewsItem} from './NewsItem.js';
import {NodeBox} from './NodeBox.js';
import {StockBox} from './StockBox.js';
import {Subsidies} from './Subsidies';
import {ParliamentBox} from './ParliamentBox';
import {NewsLink} from './NewsLink';
import Hammer from 'hammerjs';
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

/*global google*/



const MyMapComponent = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
    defaultZoom={4}
    center={new google.maps.LatLng(63.416911, 10.402636)}

  >
    <HeatmapLayer
            radius={300}
            data={[{location: new google.maps.LatLng(63.416911, 10.402636),weight:100},
                  {location: new google.maps.LatLng(59.913235, 10.751466),weight:200},
                  {location: new google.maps.LatLng(60.389604, 5.323020),weight:100}
              ]}
        />

  </GoogleMap>
))



export class ExpandedCardContent extends React.Component {
    constructor( props ) {
        super( props );
        this.getMove = this.getMove.bind( this );
    }
    makeTweetButton( name, pos ) {
        document.getElementById( 'tweetButton' ).innerHTML = '';
        window.twttr.widgets.createShareButton(
            '/',
            document.getElementById( 'tweetButton' ),
            {
                'text': name + ' er nummer ' + pos + ' på listen over de 100 mektigste i landbruket!',
                'hashtags': 'maktkåringen,landbruksmakt,nationen',
                'related':'Nationen_as'
            }
        );
    }

    componentDidMount() {
        document.getElementById( 'expandedCard' + this.props.id ).focus();
        this.makeTweetButton( this.props.info.firstName, this.props.id );

        const swipeElement = document.getElementById( 'expandedCard' + this.props.id );
        const mc = new Hammer( swipeElement );

        mc.on( 'swipeleft', () => this.props.expandoHandler( this.props.id ) );
        mc.on( 'swiperight', () => this.props.expandoHandler( this.props.id - 2 ) );
    }
    componentWillReceiveProps( props ) {
        document.getElementById( 'tweetButton' ).innerHTML = '';
        this.makeTweetButton( props.info.firstName, props.id );
    }

    getMove() {
        if ( this.props.id > this.props.info.lastYear ) {
            return <i className="material-icons listMove" id='trending_down'>trending_down</i>;
        } else if ( this.props.id < this.props.info.lastYear ) {
            return <i className="material-icons listMove" id='trending_up'>trending_up</i>;
        } else {
            return <i className="material-icons listMove" id='trending_flat'>trending_flat</i>;
        }
    }

    render() {
        // const news = this.props.info.newsItems.map( item =>
        //     <NewsItem items={item} key={item.key} />
        // );
        //console.log(this.props.names)
        return ( <span>
            <button className="btnBack" type="button" onClick={() => this.props.expandoHandler( this.props.id - 2 )}><i className="material-icons md-36" style={{'verticalAlign':'middle'}}>arrow_back</i>{this.props.names[0]}</button>
            <i className="material-icons closeButton" onClick={() => this.props.expandoHandler( -1 )}>close</i>
            <button className="btnForward" type="button" onClick={() => this.props.expandoHandler( this.props.id )}>{this.props.names[1]}<i className="material-icons md-36" style={{'verticalAlign':'middle', 'padding-bottom':5}}>arrow_forward</i></button>

            <section className="infoCardExpandedColumn" style={{'width':'85%'}}>
                <div className = "biographyName">#{this.props.id} - {this.props.info.firstName} {this.getMove()}<br/>
                    <span className="underText">{this.props.info.profession}</span> <ParliamentBox /> <br/>
                    <span className="underText">Plassering i fjor: {this.props.info.lastYear} <div id="tweetButton" style={{'display':'inline'}}/></span>
                </div>

            </section>
            <section className="infoCardExpandedColumn" style={{'justifyContent':'flex-start'}}>
                <img src={this.props.info.img} className="bgrImgExpanded" alt={this.props.info.firstName} />
                <div className="biographyText">{this.props.info.bio} </div>
                <div className="newsLinkContainer">
                    Les mer om {this.props.info.firstName}:
                    <NewsLink id="pubNationen" name={this.props.info.firstName} publication="Nationen" />
                    <NewsLink id="pubBondebladet" name={this.props.info.firstName} publication="Bondebladet" />
                </div>
            </section>

            <hr/>
            <NodeBox elements={this.props.info.elements}/>
            <hr/>
            <section className="infoCardExpandedColumn" style={{'justifyContent':'center'}}>
                <StockBox stocks={this.props.info.stocks}/>
                <Subsidies subsidies={this.props.info.subsidies} />
            </section>
            <hr/>
            <MyMapComponent
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places,visualization"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px`,width: '70%', margin: '0 auto'}}/>}
  mapElement={<div style={{ height: `100%` }} />}
/>
            {/* <section className="newsFlex">
                {news}
            </section>
            <hr/> */}
        </span>
        );
    }
}
