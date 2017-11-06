import React from 'react';

export class BetaNotice extends React.Component {
    render() {
        const usrAgent = navigator.userAgent;
        const width = window.innerWidth;
        const height = window.innerHeight;
        return (
            <div className="repr">
                <div className="exclamation">
                    <i className="material-icons">priority_high</i>
                </div>
                <div className="message">
                    <p>Hei! Takk for at du tar deg tid til å teste denne siden, og for at du er med på å gjøre årets liste enda bedre enn tidligere. Vi trenger din hjelp til å finne ut hva vi trenger å endre for å gjøre brukeropplevelsen så god som mulig, og for å finne eventuelle feil og mangler som måtte dukke opp. Etter at du er ferdig, ønsker vi veldig gjerne at du svarer på et par spørsmål <a href="https://docs.google.com/forms/d/e/1FAIpQLScCNXjWgbKg5zDkcm6KnaQGjWtkIP3z9EaRgVLDPlcRlHNJQw/viewform?usp=sf_link"> her</a>.</p>
                    <p>Vi hadde også satt pris på om du kopierer teksten under når du svarer, dette forteller oss litt om hvilken nettleser du bruker, og vil gjøre det lettere for oss å fikse ting senere:</p>
                    <b>Nettleser:</b> {usrAgent}<br/>
                    <b>Vindubredde:</b> {width}<br/>
                    <b>Vinduhøyde:</b> {height}<br/>
                </div>
            </div>
        );
    }
}
