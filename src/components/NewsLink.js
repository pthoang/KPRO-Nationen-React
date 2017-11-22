import React from 'react';
//import nationenLogo from '../nationenLogo.jpg';
//import bondebladetLogo from '../bondebladetLogo.png';
export class NewsLink extends React.Component {
    render() {
        const img = this.props.publication === 'Nationen' ? <img src="https://s3.us-east-2.amazonaws.com/tunmedia/maktkaring_2017/NationenLogo.jpg" className="newsLogo" alt={this.props.publication} /> : <img src="https://s3.us-east-2.amazonaws.com/tunmedia/maktkaring_2017/BondebladetLogo.png" className="newsLogo" alt={this.props.publication} />;
        return (
            <a href={'http://www.' + this.props.publication + '.no/arkiv/?q=' + this.props.name.split( ' ' ).join( '+' )} target="_blank" rel="noopener noreferrer">
                <div id = {this.props.id} className = {'newsLink ' + this.props.id}>
                    {/* {this.props.publication} */}
                    {img}
                </div>
            </a>
        );
    }
}
