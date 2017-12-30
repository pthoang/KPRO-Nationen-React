import React from 'react';

export class IntroText extends React.Component {

    render() {
        return (
            <div className="introText">
                <h1>Matmakt 2017</h1>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
