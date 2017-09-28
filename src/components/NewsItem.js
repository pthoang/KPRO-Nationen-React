import React from 'react';

export class NewsItem extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <div className="newsItem" >
                <img src={this.props.items.img} alt="placeholder" className="newsItemImg"/>
                <a href="http://www.nationen.no" target="_blank" rel="noopener noreferrer">
                    <div className="newsColumn" >
                        <span className="newsTitle" >{this.props.items.title}</span>
                        <span className="newsIngress">{this.props.items.lead}</span>
                    </div>
                </a>
            </div>
        );
    }
}
