import React from 'react';
const cytoscape = require( 'cytoscape' );
const cycola = require( 'cytoscape-cola' );
cytoscape.use( cycola );

export class NodeBox extends React.Component {
    constructor( props ) {
        super( props );
        this.componentDidMount = this.componentDidMount.bind( this );
    }
    componentDidMount() {
        // const img = new Image();
        // img.crossOrigin = 'Use-Credentials';
        // img.src = "http://via.placeholder.com/320x320"; //require( './2-Leif-Forsell.jpg' );

        const cy = cytoscape( {
            'container': document.getElementById( 'cy' ),
            'elements': this.props.elements[0],
            'style': [ // the stylesheet for the graph
                {
                    'selector': 'node',
                    'style': {

                        'label': 'data(name)',
                        'width':'data(size)',
                        'height':'data(size)',
                        'border-width':'3',
                        'border-color': '#618b25',
                        'background-fit':'cover'
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

        //cy.nodes()[0].style( {'background-image-crossorigin': 'use-credentials', 'background-image': 'url()'} );
        var bfs = cy.elements().bfs({
          roots: '#1',
          visit: function(v, e, u, i, depth){
            console.log( 'visit ' + v.id() );
            v.style( {'background-image': v.data('img')} );
          },
          directed: false
        });

        console.log(bfs);

        cy.panningEnabled( false );
    }
    render() {

        return <div style ={{'height':300, 'width':'100%'}} id="cy"> </div>;
    }
}
