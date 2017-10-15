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
            <div className="filterBox">Filtrér: <SelectArea items = {this.state.types} style={{'width': 140}} name="genderBox" onChange={this.props.handleChange}/>
                <br/>Søk: <SearchArea onChange={this.props.handleChange} name={'nameSearch'}/>
                {/*som bor<SelectArea items = {counties} style={{width: 220}}/>*/}
            </div>
        );
    }
}
