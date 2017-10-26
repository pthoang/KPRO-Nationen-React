import React from 'react';
import {NewsItem} from './NewsItem.js';
import {NodeBox} from './NodeBox.js';
import {StockBox} from './StockBox.js';
import {Subsidies} from './Subsidies';
import {ParliamentBox} from './ParliamentBox';


export class ExpandedCardContent extends React.Component {
    constructor( props ) {
        super( props );
        this.getMove = this.getMove.bind( this );
    }

    componentDidMount() {
        document.getElementById( 'expandedCard' + this.props.id ).focus();
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
        const news = this.props.info.newsItems.map( item =>
            <NewsItem items={item} key={item.key} />
        );

        return ( <span>
            <button className="btnBack" type="button" onClick={() => this.props.expandoHandler( this.props.id - 2 )}><i className="material-icons md-36">arrow_back</i></button>
            <i className="material-icons closeButton" onClick={() => this.props.expandoHandler( -1 )}>close</i>
            <button className="btnForward" type="button" onClick={() => this.props.expandoHandler( this.props.id )}><i className="material-icons md-36">arrow_forward</i></button>

            <section className="infoCardExpandedColumn">
                <div className = "biographyName"> {this.props.id} - {this.props.info.firstName} {this.getMove()}<br/>
                    <span style={{'color': 'lightgrey', 'fontSize':'0.8em' }}>{this.props.info.profession}</span> <ParliamentBox /> <br/>
                    <span style={{'color': 'lightgrey', 'fontSize':'0.8em' }}>Plassering i fjor: {this.props.info.lastYear}</span>
                </div>

            </section>
            <section className="infoCardExpandedColumn">
                <img src={this.props.info.img} className="bgrImgExpanded" alt={this.props.info.firstName} />
                <div className="biographyText">{this.props.info.bio} </div>
                <Subsidies subsidies={this.props.info.subsidies} />
            </section>

            <hr/>
            <section className="newsFlex">
                {news}
            </section>
            <hr/>
            <NodeBox elements={this.props.info.elements}/>
            <hr/>
            <StockBox stocks={this.props.info.stocks}/>
            <hr/>
        </span>
        );
    }
}
