import React, { Component } from 'react';
import {FilterBox} from './components/FilterBox';
import {Card} from './components/Card';
import {ExpandedCard} from './components/ExpandedCard';
import {ExpandedCardContent} from './components/ExpandedCardContent.js';
import {ExpandedCardJury} from './components/ExpandedCardJury';
import {IntroText} from './components/IntroText';
// import {BetaNotice} from './components/BetaNotice';

export default class App extends Component {

    constructor( props ) {
        super( props );
        this.handleChange = this.handleChange.bind( this );
        this.filterGender = this.filterGender.bind( this );
        this.filterName = this.filterName.bind( this );
        this.expandoHandler = this.expandoHandler.bind( this );
        this.getNames = this.getNames.bind( this );
        this.resetHandler = this.resetHandler.bind( this );

        // let query = window.location.search.substring( 1 ).split( '&' );
        // query = Number( query[0].split( '=' )[1] );
        // let expando = -1;

        // if ( !Number.isNaN( query ) && query > 0 && query < this.state.names.length ) {
        //     expando = query - 1;
        // }

        this.state = {'show':['M', 'F', 'O'],
            'nameSearch': '',
            'isExpanded': -1,
            'showJury': false,
            'searchMessage':'Laster listen...',
            'names':[],
            'description':'',
            'juryInfo':[],
            'fylker':[]};
        console.log( '%c👋 Hello!\n', 'font-size:2em;' );
    }

    handleChange( event ) {
        if ( event.target.name === 'genderBox' ) {
            if ( event.target.value === 'menn' ) {
                this.setState( {'show':['m']} );
            } else if ( event.target.value === 'kvinner' ) {
                this.setState( {'show':['f']} );
            } else {
                this.setState( {'show':['m', 'f', 'none']} );
            }
            this.forceUpdate();
        } else if ( event.target.name === 'nameSearch' ) {
            this.setState( {'nameSearch':event.target.value} );
        }
    }

    resetHandler() {
        document.getElementById( 'filterSearch' ).value = '';
        document.getElementById( 'filterBoxSelect' ).selectedIndex = 0;

        this.setState( {'nameSearch': '', 'show':['m', 'f', 'none']} );
    }

    filterGender( name ) {
        return true;
        //return this.state.show.indexOf( name.gender ) > -1;
    }

    filterName( name ) {
        if ( this.state.nameSearch.length < 1 ) {
            return true;
        } else {
            if ( name.fullName.toLowerCase().indexOf( this.state.nameSearch.toLowerCase() ) !== -1 ) {
                return true;
            }
            if ( name.profession.toLowerCase().indexOf( this.state.nameSearch.toLowerCase() ) !== -1 ) {
                return true;
            }
            if ( name.residence.toLowerCase().indexOf( this.state.nameSearch.toLowerCase() ) !== -1 ) {
                return true;
            }
            return false;
        }

    }

    componentDidMount() {
        //fetch( 'https://s3.us-east-2.amazonaws.com/tunmedia/maktkaring_2017/people.json' )
        //fetch( 'https://s3.us-east-2.amazonaws.com/tunmedia/maktkaring_2017/maktlista.json' )
        fetch( 'https://s3.us-east-2.amazonaws.com/tunmedia/maktkaring_2017/final5.json' )
            .then( response => {
                return response.json();
            } )
            .then( json => {
                this.setState( { 'names': json.people } );
                //this.setState( {'names': this.props.names} );
                this.setState( {'fylker': json.fylker, 'description':json.description, 'juryInfo':json.jury} );
                this.setState( {'searchMessage': '🤷 Fant ingen som heter det... ' } );
                console.log( json );
                let query = window.location.search.substring( 1 ).split( '&' );
                query = Number( query[0].split( '=' )[1] );
                let expando = -1;
                if ( !Number.isNaN( query ) && query > 0 && query < this.state.names.length ) {
                    expando = query - 1;
                }
                this.expandoHandler( expando );
            } );
    }

    expandoHandler( clickedId ) {
        const clicked = clickedId;
        if ( ( ( clicked !== this.state.isExpanded ) && ( typeof clicked === 'number' ) ) || clickedId === -1 ) {
            this.setState( {'isExpanded': ( clicked < this.state.names.length ? clicked : -1 )} );
            this.setState( {'showJury': false} );
        } else {
            this.setState( {'showJury': !this.state.showJury} );
        }
    }

    getNames() {
        let namePrev = null;
        let nameNxt = null;
        if ( this.state.isExpanded < this.state.names.length - 1 ) {
            nameNxt = this.state.names[this.state.isExpanded + 1].fullName.substring( 0, 6 ) + '...';
        }
        if ( this.state.isExpanded > 0 ) {
            namePrev = this.state.names[this.state.isExpanded - 1].fullName.substring( 0, 6 ) + '...';
        }
        // this.state.isExpaned < this.state.names.length ? nameNxt = this.state.names[this.state.isExpanded + 1].fullName : null;
        // this.state.isExpaned > 0 ? namePrev = this.state.names[this.state.isExpanded - 1].fullName : null;
        // console.log(namePrev);
        // return ( namePrev, nameNxt );
        return [namePrev, nameNxt];
    }

    render() {
        let cards = this.state.names.filter( this.filterGender )
            .filter( this.filterName )
            .map( name =>
                <Card key={name.key} info={name} id={name.key} expandoHandler={this.expandoHandler} /> );

        if ( cards.length < 1 ) {
            cards = ( <span role="img" aria-label="Person Shrugging" className="foundNothing"> {this.state.searchMessage}</span> );
        }
        if ( this.state.nameSearch === '!developers' ) {
            cards = ( <span role="img" aria-label="Person Shrugging" className="foundNothing"> Coded with 💚 by group 7 @ KPRO 2017 </span> );
        }

        const expando = this.state.isExpanded !== -1 ? ( <ExpandedCard info={this.state.names[this.state.isExpanded] } expandoHandler={this.expandoHandler}>
            <ExpandedCardContent id={this.state.names[this.state.isExpanded].key} info={this.state.names[this.state.isExpanded]} fylker={this.state.fylker} expandoHandler={this.expandoHandler} names={this.getNames()}/>
        </ExpandedCard> ) : ( null );

        const juryInfo = this.state.showJury ? ( <ExpandedCard info={{'key':1}} expandoHandler={this.expandoHandler} height='auto'>
            <ExpandedCardJury expandoHandler={this.expandoHandler} juryInfo={this.state.juryInfo} />
        </ExpandedCard> ) : null;
        return (
            <div className="App">
                <IntroText text={this.state.description} />
                <FilterBox handleChange={this.handleChange} expandoHandler={this.expandoHandler} handleReset={this.resetHandler}/>
                {cards}
                {expando}
                {juryInfo}
            </div> );
    }
}
