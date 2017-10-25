import React, { Component } from 'react';
import {FilterBox} from './components/FilterBox';
import {Card} from './components/Card';
import {ExpandedCard} from './components/ExpandedCard';
import {ExpandedCardContent} from './components/ExpandedCardContent.js';
import {ExpandedCardJury} from './components/ExpandedCardJury';

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.handleChange = this.handleChange.bind( this );
        this.filterGender = this.filterGender.bind( this );
        this.filterName = this.filterName.bind( this );
        this.expandoHandler = this.expandoHandler.bind( this );
        this.state = {'show':['m', 'f', 'none'],
            'nameSearch': '',
            'isExpanded': -1,
            'showJury': false};
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

    filterGender( name ) {
        return this.state.show.indexOf( name.gender ) > -1;
    }

    filterName( name ) {
        if ( this.state.nameSearch.length < 1 ) {
            return true;
        } else {
            if ( name.firstName.toLowerCase().indexOf( this.state.nameSearch.toLowerCase() ) !== -1 ) {
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

    expandoHandler( clickedId ) {
        const clicked = clickedId;
        if ( ( clicked !== this.state.isExpanded ) && ( typeof clicked === 'number' ) ) {
            this.setState( {'isExpanded': ( clicked < this.props.names.length ? clicked : -1 )} );
        } else {
            this.setState( {'showJury': !this.state.showJury} );
            console.log( this.state.showJury );
        }
    }

    render() {
        let cards = this.props.names.filter( this.filterGender )
            .filter( this.filterName )
            .map( name =>
                <Card key={name.key} info={name} id={name.key} expandoHandler={this.expandoHandler} /> );

        if ( cards.length < 1 ) {
            cards = ( <span role="img" aria-label="Person Shrugging" className="foundNothing"> 🤷 Fant ingen som heter det... </span> );
        }

        const expando = this.state.isExpanded !== -1 ? ( <ExpandedCard info={this.props.names[this.state.isExpanded] } expandoHandler={this.expandoHandler} height='90%'>
            <ExpandedCardContent id={this.props.names[this.state.isExpanded].key} info={this.props.names[this.state.isExpanded]} expandoHandler={this.expandoHandler}/>
        </ExpandedCard> ) : ( null );

        const juryInfo = this.state.showJury ? ( <ExpandedCard info={{'key':1}} expandoHandler={this.expandoHandler} height='auto'>
            <ExpandedCardJury />
        </ExpandedCard> ) : null;
        return (
            <div className="App">
                <FilterBox handleChange={this.handleChange} expandoHandler={this.expandoHandler}/>
                {cards}
                {expando}
                {juryInfo}
            </div> );
    }
}
