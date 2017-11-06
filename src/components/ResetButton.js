import React from 'react';

export class ResetButton extends React.Component {
    render() {
        return (
            <span className="resetFilterButton">
                <i className="material-icons">youtube_searched_for</i>
                <button className="filterBoxButton" type="button" onClick={() => this.props.handleReset()}>
                    Tilbakestill
                </button>
            </span>
        );
    }
}
