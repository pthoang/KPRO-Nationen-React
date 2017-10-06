import React from 'react';
var cytoscape = require( 'cytoscape' );
var cycola = require( 'cytoscape-cola' );
cytoscape.use( cycola );

export class NodeBox extends React.Component {
    componentDidMount() {
        let cy = cytoscape( {
            'container': document.getElementById( 'cy' ),
            'elements': {
                'nodes': [
                    { 'data': { 'id': 'j', 'name': 'Pål Farstad', 'size':30} },
                    { 'data': { 'id': 'e', 'name': 'Erna Solberg', 'size':20 } },
                    { 'data': { 'id': 'k', 'name': 'Leif Hansen', 'size':20 } },
                    { 'data': { 'id': 'g', 'name': 'Jon Georg Dale', 'size':20 } },
                    {'data': {'id': 'kn', 'name': 'Knut Arild Hareide', 'size':20}}
                ],
                'edges': [
                    { 'data': { 'source': 'j', 'target': 'e' } },
                    { 'data': { 'source': 'j', 'target': 'k' } },
                    { 'data': { 'source': 'j', 'target': 'g' } },
                    { 'data': { 'source': 'j', 'target': 'kn' } },
                    { 'data': { 'source': 'k', 'target': 'kn' } },
                    { 'data': { 'source': 'g', 'target': 'k' } }
                ]
            },

            'style': [ // the stylesheet for the graph
                {
                    'selector': 'node',
                    'style': {
                        'background-color': '#618b25',
                        'label': 'data(name)',
                        'width':'data(size)',
                        'height':'data(size)'
                    }
                },

                {
                    'selector': 'edge',
                    'style': {
                        'curve-style': 'unbundled-bezier',
                        'control-point-distance': '20px',
                        'control-point-weight': '0.5', // '0': curve towards source node, '1': towards target node.
                        'width': 1, //
                        'line-color': '#618B25',
                        'target-arrow-color': '#618B25',
                        'target-arrow-shape': 'triangle'
                    }
                }
            ],

            'layout': {
                'name': 'cola',
                'maxSimulationTime': 3.6e6
            }
        } );
    }
    render() {

        return <div style ={{'height':300, 'width':600}} id="cy"> </div>;
    }
}
