import React from 'react';

import {SelectArea} from './SelectArea';
import {SearchArea} from './SearchArea';

export class FilterBox extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {'types': [['alle', 0], ['menn', 1], ['kvinner', 2]] };
    }
    render() {
        return (
            <div className="filterBox">
                <div className="info">Søk og filtrér:</div>
                <div className="search"><SearchArea onChange={this.props.handleChange} name={'nameSearch'}/></div>
                <div className="filter"><SelectArea items = {this.state.types} style={{'width': 140}} name="genderBox" onChange={this.props.handleChange}/></div>
                <div className="jury"><button className="btnJury" type="button" onClick={() => this.props.expandoHandler( 'jury' )}>Om juryen</button></div>
            </div>
        );
    }
}
