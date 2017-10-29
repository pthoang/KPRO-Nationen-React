import React from 'react';
const cytoscape = require( 'cytoscape' );
const cycola = require( 'cytoscape-cola' );

cytoscape.use( cycola );

export class NodeBox extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            'description': '',
            'elements':this.props.elements[0]
        };
        this.handleTextChange = this.handleTextChange.bind( this );
    }

    handleTextChange( text ) {
        this.setState( {'description': text} );
    }

    componentWillReceiveProps( nextProps ) {
        this.setState( {'elements': nextProps.elements[0]} );
        this.createGraph( nextProps.elements[0] );
    }
    createGraph( elements ) {
        const cy = cytoscape( {
            'container': document.getElementById( 'cy' ),
            'boxSelectionEnabled': false,
            'layout':{
                'name':'circle'
            },
            'elements': elements,
            'style': cytoscape.stylesheet()
                .selector( 'node' )
                .css( {
                    'label': 'data(name)',
                    'width':'data(size)',
                    'height':'data(size)',
                    'border-width':'3',
                    'border-color': '#618b25',
                    'background-fit':'cover',
                    //'background-image': 'data(img)'
                    'background-image': 'https://www.fylkesmannen.no/Images/Bilder%20FMNO/Landbruk%20bilder/LARAs%20prosjekter,%20konferanser,%20annet%20bilder/jgd.jpg'
                } )
                .selector( 'edge' )
                .css( {
                    'curve-style': 'unbundled-bezier',
                    'control-point-distance': '20px',
                    'control-point-weight': '0.5', // '0': curve towards source node, '1': towards target node.
                    'width': 1, //
                    'line-color': '#618B25',
                    'target-arrow-color': '#618B25',
                    'target-arrow-shape': 'triangle'
                } )
        }
        );
        //cy.panningEnabled( false );
        cy.on( 'tap', 'node', ( evt ) => {
            const node = evt.target;
            if ( node.id() !== 1 ) {
                console.log( node.data( 'description' ) );
                this.handleTextChange( node.data( 'description' ) );
            }
        } );
        cy.panningEnabled( false );
    }
    componentDidMount() {
        this.createGraph( this.state.elements );
    }
    render() {
        return <div> <div style ={{'height':300, 'width':'100%'}} id="cy"> </div><h3 id="desc" style={{'textAlign':'center'}}>{this.state.description}</h3></div>;
    }
}
