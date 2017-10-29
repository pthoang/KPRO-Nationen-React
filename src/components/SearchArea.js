import React from 'react';

export class SearchArea extends React.Component {
    render() {
        return (
            <span className="searchBar">
                <i className="material-icons">search</i>
                <input type="text" name={this.props.name} onChange={this.props.onChange} placeholder="Navn, stilling, bosted..." />
            </span>
        );
    }
}
