import React from 'react';
import nationenLogo from '../nationenLogo.jpg';
import bondebladetLogo from '../bondebladetLogo.png';
export class NewsLink extends React.Component {
    render() {
        const img = this.props.publication === 'Nationen' ? <img src={nationenLogo} className="newsLogo" alt={this.props.publication} /> : <img src={bondebladetLogo} className="newsLogo" alt={this.props.publication} />;
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
