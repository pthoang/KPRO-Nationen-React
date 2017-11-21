import React from 'react';

export class StockBox extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            'data': []
        };
    }
    updateStocks( ) {
        const listItems = this.props.stocks.map( stock => (
            <tr key={stock.id}>
                <td>{stock.company}</td>
                <td className="rightAlign">{( stock.numStocks ).toLocaleString( 'no-NO' )}</td>
                <td className="rightAlign">{( "N/A" )},-</td>
            </tr>
        ) );
        return listItems;
    }

    render() {
        const stocks = this.props.stocks.length < 1 ? null : (
            <table>
                <thead>
                    <tr>
                        <th>Selskap</th>
                        <th className="rightAlign">Aksjer</th>
                        <th className="rightAlign">Verdi (NOK)</th>
                    </tr>
                </thead>
                <tbody>{this.updateStocks()}</tbody>
            </table>
        );
        return (
            <span style={{'margin':30}}> {stocks} </span>
        );
    }
}
