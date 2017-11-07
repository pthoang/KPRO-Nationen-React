import React from 'react';

export class Subsidies extends React.Component {
    updateSubsidies( ) {
        const listItems = this.props.subsidies.map( sub => (
            <tr key={sub.id}>
                <td>{sub.name}</td>
                <td className="rightAlign">{( sub.value ).toLocaleString( 'no-NO' )},-</td>
            </tr>
        ) );
        return listItems;
    }

    render() {
        const stocks = this.props.subsidies.length < 1 ? null : (
            <table>
                <thead>
                    <tr>
                        <th>Driftstilskudd</th>
                        <th className="rightAlign">Verdi (NOK)</th>
                    </tr>
                </thead>
                <tbody>{this.updateSubsidies()}</tbody>
            </table>
        );
        return (
            <span style={{'margin':30}}> {stocks} </span>
        );
    }
}
