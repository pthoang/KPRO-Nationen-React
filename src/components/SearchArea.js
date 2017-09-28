import React from 'react';

export class SearchArea extends React.Component {
    render() {
        return (
            <input className="searchArea" type="text" name={this.props.name} onChange={this.props.onChange} defaultValue="" />
        );
    }
}
