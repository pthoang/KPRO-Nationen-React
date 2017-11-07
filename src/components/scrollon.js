import React from 'react';
export class ScrollOn extends React.Component {
    constructor(props) {
      super(props);
      this.state={isHide:false};
      this.hideBar = this.hideBar.bind(this)
    }
    hideBar() {
       let {isHide} = this.state
       window.scrollY > this.prev?
       !isHide && this.setState({isHide:true})
       :
       isHide && this.setState({isHide:false})

       this.prev = window.scrollY;
    }
    componentDidMount() {
        window.addEventListener('scroll',this.hideBar);
    }
    componentWillUnmount() {
         window.removeEventListener('scroll',this.hideBar);
    }
    render() {
        let classHide=this.state.isHide?"hide":""
        return <div className={"topbar "+classHide}><div className="scrollon1"><div className={"scrollon"+classHide}>Mer innhold nedover → </div></div></div>;
    }
}
