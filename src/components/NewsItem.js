import React from 'react';

export class NewsItem extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <div className="newsItem" >
                <img src={this.props.items.img} alt="placeholder" className="newsItemImg"/>
                <div className="newsColumn">
                    <a href="http://www.nationen.no">
                        <span className="newsTitle"> {this.props.items.title}</span> <br/>
                        <span className="newsIngress">{this.props.items.lead}</span>
                    </a>
                </div>
            </div>
        );
    }
}
