import React from 'react';

const juryMembers = [{
    'name': 'Reidar Almås',
    'img': 'http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2015/12/1.jpg',
    'desc': 'Sosiolog og professor i bygdesosiologi og regionalpolitikk',
    'key':1
}, {
    'name': 'Lars Olav Haug',
    'img': 'http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2015/12/2.jpg',
    'desc': 'Mangeårig redaktør i Bondebladet og Nationen, nå prosjektleder i Tun Media',
    'key':2
}, {
    'name': 'Linda Sunde',
    'img': 'http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2015/12/3.jpg',
    'desc': 'Journalist i Bondebladet',
    'key':3
}, {
    'name': 'Kato Nykvist',
    'img': 'http://s3.amazonaws.com/tun-static/wp-content/uploads/sites/2/2016/11/17170045/82-Kato-Nykvist.jpg',
    'desc': 'Politisk redaktør i Nationen',
    'key':4
}, {
    'juryText':'Juryen har gjort suverene vurderinger og valg, og skrevet sine begrunnelser helt fritt og uavhengig av redaksjonene i Bondebladet og Nationen.'
}];

export class ExpandedCardJury extends React.Component {
    render() {
        const jury = this.props.juryInfo.juryMembers.map( person =>
            <JuryMember key={person.fullName} info={person} />
        );
        return (
            <div>
                <i className="material-icons closeButton" onClick={() => this.props.expandoHandler( -1 )}>close</i>
                <div className="juryHeader" style={{'display':'flex', 'justifyContent':'center'}}>Om juryen</div>
                <div className="juryGrid"> {jury}  <div className="juryText">{this.props.juryInfo.description} </div>
                </div>
            </div>

        );
    }
}

class JuryMember extends React.Component {
    render() {
        return (
            <div className="juryContainer">
                <img src={this.props.info.img} className="juryImg" alt={this.props.info.name} />
                <div className="juryName">{this.props.info.fullName}</div>
                <div className="juryDesc">{this.props.info.title}</div>
            </div>
        );
    }
}
