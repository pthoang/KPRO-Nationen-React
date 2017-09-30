import React from 'react';
import {NewsItem} from './NewsItem.js';

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
            return <i className="material-icons" id='trending_down'>trending_down</i>;
        } else if ( this.props.id < this.props.info.lastYear ) {
            return <i className="material-icons" id='trending_up'>trending_up</i>;
        } else {
            return <i className="material-icons" id='trending_flat'>trending_flat</i>;
        }
    }

    render() {
        const news = this.props.info.newsItems.map( item =>
            <NewsItem items={item} key={item.key} />
        );
        return ( <span>
            <section className="infoCardExpandedColumn">
                <div className = "biographyName"> {this.props.id} - {this.props.info.firstName} {this.getMove()}<br/>
                    <span style={{'color': 'lightgrey', 'fontSize':'0.8em' }}>{this.props.info.profession}</span> <br/>
                    <span style={{'color': 'lightgrey', 'fontSize':'0.8em' }}>Plassering i fjor: {this.props.info.lastYear}</span>
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
