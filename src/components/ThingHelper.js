import React from 'react';

export class ThingHelper extends React.Component {
    render() {
        return (
            <div className="thingHelper">
                <i className="material-icons md-48">help_outline</i>
                <span className="tooltiptext">
                    {this.props.helpText}
                </span>
            </div>
        );
    }
}
