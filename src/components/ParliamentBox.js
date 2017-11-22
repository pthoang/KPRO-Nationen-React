import React from 'react';

export class ParliamentBox extends React.Component {
    render() {
        return (
            <div className="parliamentBox"><i className="material-icons md-18">priority_high</i> <span>{this.props.info.government ? 'Regjering' : 'Stortingsrepresentant'}</span>
                <span className="tooltiptext">
                    {this.props.info.politicalParty} <br/>
                    {this.props.info.government ? this.props.info.title : this.props.info.municipality}
                </span>
            </div>
        );
    }
}
