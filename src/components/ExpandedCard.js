import React from 'react';


export class ExpandedCard extends React.Component {
    constructor( props ) {
        super( props );
        this.handleKeyPress = this.handleKeyPress.bind( this );
    }
    childClickhandler( e ) {
        e.stopPropagation();
    }

    handleKeyPress( e ) {
        if ( e.key === 'Escape' ) {
            this.props.expandoHandler( -1 );
        }
        if ( e.key === 'ArrowRight' ) {
            this.props.expandoHandler( this.props.info.key );
        }
        if ( e.key === 'ArrowLeft' ) {
            this.props.expandoHandler( this.props.info.key - 2 );
        }
    }

    render() {
        return ( <div className="infoCardExpandedBgr" onClick={() => this.props.expandoHandler( -1 )}>
            <div className="infoCardExpanded" style={{'height':this.props.height}} id={'expandedCard' + this.props.info.key} tabIndex="0" onKeyDown={this.handleKeyPress} onClick={this.childClickhandler}>
                {this.props.children}
            </div>
        </div> );
    }
}
