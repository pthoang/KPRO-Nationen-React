import React from 'react';
import {CardText} from './CardText';
import {ExpandedCardContent} from './ExpandedCardContent';

export class Card extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {'isExpanded':false};
        this.clickHandler = this.clickHandler.bind( this );
        this.handleKeyPress = this.handleKeyPress.bind( this );
    }

    clickHandler() {
        this.setState( {'isExpanded':!this.state.isExpanded} );
    }

    handleKeyPress( e ) {
        if ( e.key === 'Escape' ) {
            this.setState( {'isExpanded':!this.state.isExpanded} );
        }
    }

    render() {
        if ( !this.state.isExpanded ) {
            return ( <div className="Card" id={this.props.id} onClick={this.clickHandler}>
                <img className="Card-bgrImg" src={this.props.info.img} alt={this.props.info.firstName} />
                <CardText info={this.props.info} id ={this.props.id}/>
            </div> );
        } else {
            return ( <div className="infoCardExpandedBgr">
                <div className="infoCardExpanded" id={'expandedCard' + this.props.id} tabIndex="0" onKeyDown={this.handleKeyPress}>
                    <ExpandedCardContent id={this.props.id} info={this.props.info} onClick={this.clickHandler} />
                </div>
            </div> );
        }
    }
}
