import React from 'react';
//import {NewsItem} from './NewsItem.js';
import {NodeBox} from './NodeBox.js';
import {StockBox} from './StockBox.js';
import {Subsidies} from './Subsidies';
import {ParliamentBox} from './ParliamentBox';
import {NewsLink} from './NewsLink';
import Hammer from 'hammerjs';


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
            <button className="btnBack" type="button" onClick={() => this.props.expandoHandler( this.props.id - 2 )}><i className="material-icons md-36" style={{'verticalAlign':'middle'}}>arrow_back</i>{this.props.names[0]}</button>
            <i className="material-icons closeButton" onClick={() => this.props.expandoHandler( -1 )}>close</i>
            <button className="btnForward" type="button" onClick={() => this.props.expandoHandler( this.props.id )}>{this.props.names[1]}<i className="material-icons md-36" style={{'verticalAlign':'middle', 'padding-bottom':5}}>arrow_forward</i></button>

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
            {/* <section className="newsFlex">
                {news}
            </section>
            <hr/> */}
        </span>
        );
    }
}
