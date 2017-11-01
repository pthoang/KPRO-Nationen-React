import React from 'react';

export class SelectArea extends React.Component {
    render() {
        const listItems = this.props.items.map( ( item, key ) =>
            <option value={item[0]} key={key}>{item[0]}</option>
        );
        return (
            <span className="selectBar">
                <i className="material-icons">filter_list</i>
                <select onChange={this.props.onChange} id="filterBoxSelect" style={this.props.style} name={this.props.name}>
                    {listItems}
                </select>
            </span>
        );
    }
}
