import React from 'react';
import {NewsItem} from './NewsItem.js';

export class ExpandedCardContent extends React.Component {
    constructor( props ) {
        super( props );
        this.getMove = this.getMove.bind( this );
    }

    getMove() {
        if ( this.props.id > this.props.info.lastYear ) {
            return <i className="material-icons" style={{'color': '#FF8686', 'fontSize':'1.2em', 'verticalAlign': 'middle'}}>trending_down</i>;
        } else if ( this.props.id < this.props.info.lastYear ) {
            return <i className="material-icons" style={{'color': '#9EBA7F', 'fontSize':'1.2em', 'verticalAlign': 'middle'}}>trending_up</i>;
        } else {
            return <i className="material-icons" style={{'color': '#FCD367', 'fontSize':'1.2em', 'verticalAlign': 'middle'}}>trending_flat</i>;
        }
    }

    render() {
        const news = this.props.info.newsItems.map( item =>
            <NewsItem items={item} key={item.key} />
        );
        return ( <span>
            <section className="infoCardExpandedColumn">
                <div className = "biographyName"> {this.props.id} - {this.props.info.firstName}<br/>
                    <span style={{'color': 'lightgrey', 'fontSize':'0.8em' }}>{this.props.info.profession}</span> <br/>
                    <span style={{'color': 'lightgrey', 'fontSize':'0.8em' }}>Plassering i fjor: {this.getMove()} {this.props.info.lastYear}</span>
                </div>
                <i className="material-icons closeButton" onClick={this.props.onClick}>close</i>
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
