import React from 'react';
import {ExpandedCardContent} from './ExpandedCardContent.js';


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
    }

    render() {
        return ( <div className="infoCardExpandedBgr" onClick={() => this.props.expandoHandler( -1 )}>
            <div className="infoCardExpanded" id={'expandedCard' + this.props.info.key} tabIndex="0" onKeyDown={this.handleKeyPress} onClick={this.childClickhandler}>
                <ExpandedCardContent id={this.props.info.key} info={this.props.info} expandoHandler={this.props.expandoHandler}/>
            </div>
        </div> );
    }
}
