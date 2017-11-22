import React from 'react';
import {CardText} from './CardText';

export class Card extends React.Component {

    render() {

        return ( <div className="Card" id={this.props.id} onClick={() => this.props.expandoHandler( this.props.id - 1 )}>
            <img className="Card-bgrImg" src={this.props.info.img} alt={this.props.info.fullName} />
            <CardText info={this.props.info} id ={this.props.id}/>
        </div> );
    }
}
