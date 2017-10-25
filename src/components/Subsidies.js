import React from 'react';

export class Subsidies extends React.Component {
    updateSubsidies( ) {
        const listItems = this.props.subsidies.map( sub => (
            <div className="subs1" key={sub.id}>
                <div className="subsName">{ sub.name }</div>
                <div className="subsVal">{( sub.value ).toLocaleString( 'no-NO' ) + ',-'}</div>
            </div>
        ) );
        return listItems;
    }
    render() {
        const stocks = this.props.subsidies.length < 1 ? null : ( <div className="subs">
            <div className="subsHead">Subsidier</div>
            {this.updateSubsidies()}
        </div> );

        return (
            <span>{stocks}</span>
        );
    }
}
