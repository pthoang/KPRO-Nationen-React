import React from 'react';

export class ParliamentBox extends React.Component {
    render() {
        return (
            <div className="parliamentBox"><i className="material-icons md-18">priority_high</i> <span>Stortingsrepresentant</span>
                <span className="tooltiptext">
                Representerer KrF i Hordaland. <br/>
                Sitter i finanskomiteen
                </span>
            </div>
        );
    }
}
