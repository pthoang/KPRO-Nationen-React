import React, { Component } from 'react';
import {FilterBox} from './components/FilterBox';
import {Card} from './components/Card';
// const areas = ["alt","landbruk", "politikk", "næringsliv"];
// const counties = ["i hele landet","på Østlandet", "på Vestlandet",
// "i Nord-Norge", " i Trøndelag", " på Sørlandet"];

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.handleChange = this.handleChange.bind( this );
        this.filterGender = this.filterGender.bind( this );
        this.filterName = this.filterName.bind( this );
        this.state = {'show':['m', 'f', 'none'],
            'nameSearch': ''};
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
            return name.firstName.toLowerCase().indexOf( this.state.nameSearch.toLowerCase() ) !== -1;
        }

    }

    render() {
        let cards = this.props.names.filter( this.filterGender )
            .filter( this.filterName )
            .map( name =>
                <Card key={name.key} info={name} id={name.key} /> );

        if ( cards.length < 1 ) {
            cards = ( <span role="img" aria-label="Person Shrugging" className="foundNothing"> 🤷 Fant ingen som heter det... </span> );
        }

        return (
            <div className="App">
                <FilterBox handleChange={this.handleChange}/>
                {cards}
            </div> );
    }
}
