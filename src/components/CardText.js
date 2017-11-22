import React from 'react';

export class CardText extends React.Component {
    render() {
        return ( <div className="CardText">
            {this.props.id} - {this.props.info.fullName}<br />
            <span className="CardText-nameText">
                <hr />
                {this.props.info.profession}
            </span>
        </div> );
    }
}
