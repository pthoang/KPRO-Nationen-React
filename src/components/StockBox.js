import React from 'react';

export class StockBox extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            'data': []
        };

    }
    componentDidMount() {
        const listItems = this.props.stocks.map( stock => (
            <tr key={stock.id}>
                <td>{stock.company}</td>
                <td className="rightAlign">{( stock.numStocks ).toLocaleString( 'no-NO' )}</td>
                <td className="rightAlign">{( stock.stockValueNok ).toLocaleString( 'no-NO' )},-</td>
            </tr>
        ) );
        this.setState( { 'data': listItems } );
    }
    render() {
        if ( this.props.stocks ) {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Selskap</th>
                            <th className="rightAlign">Aksjer</th>
                            <th className="rightAlign">Verdi (NOK)</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.data}</tbody>
                </table>
            );
        } else {
            return null;
        }
    }
}
