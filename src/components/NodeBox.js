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
                'name':'concentric',
                //'padding':0,
                'nodeDimensionsIncludeLabels': true,
            },
            'elements': elements,
            'style': cytoscape.stylesheet()
                .selector( 'node' )
                .css( {
                    'label': 'data(name)',
                    'width':'50px',
                    'height':'50px',
                    'border-width':'3',
                    'border-color': '#647075',
                    'background-fit':'cover',
                    'background-image': 'data(img)',
                    'background-image-crossorigin':'anonymous',
                    'text-valign' : 'bottom',
                    'text-halign' : 'center',
                    //'font-size':'10pt',
                    'text-background-color':'lightgrey',
                    'text-background-opacity': .5,
                    'text-background-shape':'roundrectangle',
                    'text-background-padding':'3px',
                    'text-border-opacity':1,
                    'text-border-width': '1px',
                    'text-border-style':'solid',
                    'text-border-color':'grey'
                } )
                .selector( 'edge' )
                .css( {
                    'curve-style': 'unbundled-bezier',
                    'control-point-distance': '20px',
                    'control-point-weight': '0.5', // '0': curve towards source node, '1': towards target node.
                    'width': 1, //
                    'line-color': '#647075',
                    'target-arrow-color': '#647075',
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
        return <div> <div style ={{'height':600, 'width':'100%', 'margin':0}} id="cy"> </div><h3 id="desc" style={{'textAlign':'center'}}>{this.state.description}</h3></div>;
    }
}
