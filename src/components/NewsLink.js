import React from 'react';

export class NewsLink extends React.Component {
    render() {

        return (
            <a href={'http://www.' + this.props.publication + '.no/arkiv/?q=' + this.props.name.split( ' ' ).join( '+' )} target="_blank" rel="noopener noreferrer">
                <div id = {this.props.id} className = {'newsLink ' + this.props.id}>
                    {this.props.publication}
                </div>
            </a>
        );
    }
}
