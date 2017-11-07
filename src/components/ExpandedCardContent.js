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
import {ScrollOn} from "./scrollon.js"
/*global google*/

const mapStyle = {
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#44af69"},{"visibility":"on"}]}]
};

const MyMapComponent = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
    defaultZoom={4}
    center={new google.maps.LatLng(65.080278, 15.731389)}
    defaultOptions={{styles: mapStyle.styles}}

  >
    <HeatmapLayer
            data={[{location: new google.maps.LatLng(63.416911, 10.402636),weight:100}, //Sør-Trøndelag
                  {location: new google.maps.LatLng(59.913235, 10.751466),weight:700}, //Oslo og Akershus
                  {location: new google.maps.LatLng(60.3925, 5.323333),weight:200}, //Hordaland
                  {location: new google.maps.LatLng(70.080278, 29.731389),weight:100}, //Finnmark
                  {location: new google.maps.LatLng(59.278889, 11.116389),weight:100}, //Østfold
                  {location: new google.maps.LatLng(60.794444, 11.078611),weight:100}, //Hedmark
                  {location: new google.maps.LatLng(61.114722, 10.467222),weight:100}, //Oppland
                  {location: new google.maps.LatLng(59.744722, 10.205556),weight:100}, //Buskerud
                  {location: new google.maps.LatLng(59.270278, 10.409722),weight:100}, //Vestfold
                  {location: new google.maps.LatLng(59.2075, 9.610556),weight:100}, //Telemark
                  {location: new google.maps.LatLng(58.461667, 8.766944),weight:100}, //Aust-Agder
                  {location: new google.maps.LatLng(58.140833, 8),weight:100}, //Vest-Agder
                  {location: new google.maps.LatLng(58.960833, 5.715556),weight:100}, //Rogaland
                  {location: new google.maps.LatLng(61.185833, 6.821944),weight:100}, //Sogn og fjordane
                  {location: new google.maps.LatLng(62.7375, 7.163056),weight:100}, //Møre og romsdal
                  {location: new google.maps.LatLng(64.013056, 11.496944),weight:100}, //Nord-Trøndelag
                  {location: new google.maps.LatLng(67.28, 14.405),weight:100}, //Nordland
                  {location: new google.maps.LatLng(69.651944, 18.953333),weight:100} //Troms
                ]}
        />

  </GoogleMap>
))



export class ExpandedCardContent extends React.Component {
    constructor( props ) {
        super( props );
        this.getMove = this.getMove.bind( this );
        //this.defer = this.defer.bind( this );
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

    defer( method, name, pos ) {
        if ( window.twttr ) {
            method( name, pos );
        } else {
            console.log( 'waiting for twitter' );
            setTimeout( () => {
                this.defer( method, name, pos );
            }, 50 );
        }
    }

    componentDidMount() {
        document.getElementById( 'expandedCard' + this.props.id ).focus();
        this.defer( this.makeTweetButton, this.props.info.firstName, this.props.id );

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

    getTwitter() {
        if ( this.props.info.twitterAcnt ) {
            return (
                <span className="underText">
                    <a href={'https://twitter.com/' + this.props.info.twitterAcnt} target="_blank" rel="noopener noreferrer">
                    @{this.props.info.twitterAcnt}
                        <svg className="svgTwitterLogo"id="Logo_FIXED" data-name="Logo — FIXED" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" >
                            <rect className="cls-1" fill='none'/>
                            <path className="cls-2" fill='#1da1f2' d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
                            />
                        </svg>
                    </a><br/>
                </span>
            );
        } else {
            return null;
        }
    }

    render() {
        // const news = this.props.info.newsItems.map( item =>
        //     <NewsItem items={item} key={item.key} />
        // );
        //console.log(this.props.names)
        return ( <span>
            <ScrollOn />
            <button className="btnBack" type="button" onClick={() => this.props.expandoHandler( this.props.id - 2 )}><i className="material-icons md-36" style={{'verticalAlign':'middle'}}>arrow_back</i>{this.props.names[0]}</button>
            <i className="material-icons closeButton" onClick={() => this.props.expandoHandler( -1 )}>close</i>
            <button className="btnForward" type="button" onClick={() => this.props.expandoHandler( this.props.id )}>{this.props.names[1]}<i className="material-icons md-36" style={{'verticalAlign':'middle', 'paddingBottom':5}}>arrow_forward</i></button>

            <section className="infoCardExpandedColumn" style={{'width':'85%'}}>
                <div className = "biographyName">#{this.props.id} - {this.props.info.firstName} {this.getMove()} <div id="tweetButton" style={{'display':'inline'}}/><br/>
                    <span className="underText">{this.props.info.profession}</span> <ParliamentBox /> <br/>
                    <span className="underText">Plassering i fjor: {this.props.info.lastYear}</span><br/>
                    {this.getTwitter()}
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
  containerElement={<div style={{ height: `400px`,width: '62%', margin: '0 auto'}}/>}
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
