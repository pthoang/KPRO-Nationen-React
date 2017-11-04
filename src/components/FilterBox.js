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
                {/* <div className="info">Søk og filtrér:</div> */}

                <div className="filter">
                    <SelectArea items = {this.state.types} style={{'width': 140}} name="genderBox" onChange={this.props.handleChange}/>
                    {/* <span className="resetFilterButton">
                        <i className="material-icons">youtube_searched_for</i>
                        <button className="filterBoxButton" type="button" onClick={() => this.props.handleReset()}>
                            Tilbakestill
                        </button>
                    </span> */}
                </div>
                <div className="search">
                    <SearchArea onChange={this.props.handleChange} name={'nameSearch'}/>
                </div>
                <div className="jury">
                    <button className="filterBoxButton" type="button" onClick={() => this.props.expandoHandler( 'jury' )}>
                        Om juryen
                    </button>
                </div>
            </div>
        );
    }
}
