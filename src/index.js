import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import registerServiceWorker from './registerServiceWorker';

const names = [
  {
	firstName: "Jon Georg",
	lastName: "Dale",
	img:
	  require('./img/Jon-Georg-Dale.jpg'),
	key:"1",
	gender:"m",
    profession:"Statsråd (FrP)",
    residence:"Norge",
    bio:"Posisjonen i seg selv gir mye makt. Landbrukspolitikken har ikke gjennomgått noe retningsskifte etter at Dale overtok i desember 2015, men stilen er en annen. Der Sylvi Listhaug forsøkte å drive gjennom endringer mot næringens og det politiske flertalls vilje (f.eks. brev til kommunene om priskontroll på landbrukseiendom), ønsker Dale dialog. Men til sjuende og sist er det statsråden som må utøve politisk makt for å drive sakene gjennom. Ved hjelp av departementsråden fikk han lirket på plass en jordbruksavtale, og den nye landbruksmeldinga vil angi retningen framover."
  },
  {
	firstName: "Leif",
	lastName: "Forsell",
	img:
	  require('./img/Leif-Forsell.jpg'),
	key:"2",
	gender:"m",
    profession:"Departmentsråd",
    residence:"Norge",
    bio:"Sentralt plassert som departementsråd i LMD. Forsell kjenner spillet og formalitetene. Dermed kan han gi statsråden presis informasjon, ikke minst om hvilke endringer som kan gjennomføres utenfor Stortinget. Forsell er også statens forhandlingsleder i jordbruksforhandlingene. Han har definisjonsmakt, og regnes som arkitekten bak mye av landbrukspolitikken. Han er også flink til å lese Stortinget. Gjennom mange roller opp gjennom årene har Forsell bygd opp et stort kontaktnett i landbruks-Norge som han bruker aktivt. Ingen må la seg «lure» av en underfundig og lavmælt væremåte. Han har mye makt, men det er statsråden som har siste ordet."
  },
  {
	firstName: "Pål",
	lastName: "Farstad",
	img:
	  require('./img/Paal-Farstad.jpg'),
	key:"3",
	gender:"m",
    profession:"Stortingsrepresentant (V)",
    residence:"Norge",
    bio:"Venstre er i en nøkkelposisjon på Stortinget med sin samarbeidsavtale med mindretallsregjeringen Solberg. På mange av politikkens saksfelt, deriblant landbruk, er det Venstre som definerer hvor langt liberaliseringsiveren i Høyre og Fremskrittspartiet får lov til å strekke seg. Pål Farstad er partiets utøvende landbrukspolitiker, og har stor innflytelse på hvor Venstres sprikende stortingsgruppe skal sette ned foten overfor regjeringen. I fjor brakte «stoppmakta» til Venstre Farstad helt til topps i kåringen. Venstres posisjon er like avgjørende i landbrukspolitikken som tidligere, men Farstad har ikke vært like aktiv i landbruksdebattene i år som i fjor."
  },
  {
	firstName: "Familien",
	lastName: "Johannson",
	img:
	  require('./img/Johannson.jpg'),
	key:"4",
	gender:"m",
    profession:"Norgesgruppen",
    residence:"Norge",
    bio:"Brødrene Knut Hartvig Johannson og Torbjørn Johannson kontrollerer NorgesGruppen sammen med Knut Hartvigs sønn Johan Johansson, som eier ca. 70 prosent. NorgesGruppen er landets største matvarekonsern og eier flere kjeder og den største grossist- og distribusjonsvirksomheten Asko. Gruppen har også flere egne matvaremerker, det styrker markedsmakten. Familien Johannson har stor makt over leverandører, varer, hvor maten skal selges og til hvilken pris. De to brødrene har gitt uttrykk for at de ønsker et norsk landbruk, men familien har samtidig stor makt over hvilke leverandører og produkter som skal satses på."
  },
  {
	firstName: "Lars Petter",
	lastName: "Bartnes",
	img:
	  require('./img/Lars-Petter-Bartnes.jpg'),
	key:"5",
	gender:"m",
    profession:"Leder i Norges Bondelag",
    residence:"Norge",
    bio:"Leder i Norges Bondelag, det klart største faglaget i landbruket. Mest synlig som forhandlingsleder i jordbruksoppgjøret, men Bartnes er engasjert i en rekke landbrukspolitiske spørsmål. Noe av det viktigste bondelagslederen gjør er politikerkontakt for å informere og påvirke de folkevalgte. Med en landbruksminister fra Frp er det krevende å få gjennomslag for Bondelagets standpunkter. Bartnes vet å utnytte at veien går gjennom KrF og Venstre. Internt er bondelagslederens store utfordring å forene ulike produksjoner og landsdeler om felles krav. Medlemmenes interesser skal balanseres mot det som er politisk mulig, men 60.000 medlemmer gir uansett makt."
  },
  {
	firstName: "Knut Arild",
	lastName: "Hareide",
	img:
	  require('./img/Knut-Arild-Hareide.jpg'),
	key:"6",
	gender:"m",
    profession:"Stortingsrepresentant (KrF)",
    residence:"Norge",
    bio:"Leder KrF. Partiets rolle som støtteparti for regjeringen gir KrF-lederen en sentral posisjon i behandlingen av statsbudsjettet og andre viktige saker. Hareide har også engasjert seg personlig i flere landbrukspolitiske saker, ikke minst jordvern. Han har en nøkkelrolle for å skaffe regjeringen flertall for sakene, og er en av de politikere landbruket støtter seg mest på med dagens politiske landskap. Som leder av et støtteparti har Hareide mye makt i landbrukspolitiske saker. Særlig på Sør- og Vestlandet henter KrF relativt mange bondestemmer, og Hareide blir oppfattet som garantist for viktige bærebjelker i landbrukspolitikken."
  },
  {
	firstName: "Ulven",
	lastName: "",
	img:
	  require('./img/Ulv.jpg'),
	key:"7",
	gender:"none",
    profession:"Ulv",
    residence:"Norge",
    bio:"Ulven er elsket og hatet. Som art har den både konkret og symbolsk makt over landbruket. I de ulvetette områdene er sauenæringa langt på vei lagt ned. Slik sett har ulven makt til å endre det norske kulturlandskapet. Ettersom bestanden har vokst, har ulven som art også økende betydning for landbruket. I tillegg har ulven stor symbolsk betydning. Den intense ulvekonflikten er i dag den fremste markøren for skillelinjen mellom by og land. Ulven, og den omstridte ulveforvaltningen, har potensial til å redusere landbrukets legitimitet blant byfolk. Det kan få betydelige konsekvenser for landbruksnæringas rammevilkår."
  },
  {
	firstName: "Innkjøpsidrektørene",
	lastName: "",
	img:
	  require('./img/matvarekjedene.jpg'),
	key:"8",
	gender:"none",
    profession:"Matvarekjedene",
    residence:"Norge",
    bio:"Mange har hørt om «høstjakta», der leverandørene sitter på gangen hos matvarekjedene for å forhandle med innkjøpsdirektørene. Øyvind Andersen i NorgesGruppen, Tor Helge Gundersen i Coop og Lars Kristian Lindberg i Rema 1000 har avgjørende innflytelse på hvilke varer som slipper til i hyllene, og hvilke produkter leverandøren må slutte å produsere eller importere. Det er innkjøpsdirektørene som har den operative makten i NorgesGruppen, Coop og Rema 1000, og de representerer en makt som var utenkelig for 20 år siden. Regjeringen droppet en lov om god handelsskikk, og innkjøperne kan kjøre på med uforminsket makt. Konserndirektør for innkjøp i NorgesGruppen, Øyvind Andersen, er den mektigste blant likemenn fordi denne kjeden kan kreve ekstra rabatter som største kunde."
  },
  {
	firstName: "Per Gunnar",
	lastName: "Skorge",
	img:
	  require('./img/Per-Skorge.jpg'),
	key:"9",
	gender:"m",
    profession:"Generalsekretær Norges Bondelag",
    residence:"Norge",
    bio:"Generalsekretær Norges Bondelag. Generalsekretæren i Norges Bondelag er landbrukets mest sentrale lobbyist. Han har gode politiske kontakter, og er en faglig sterk person som blir lyttet til. En av de tøffeste oppgavene for øyeblikket er kampen for markedsreguleringsordningene. Skorge er øverste administrative leder for en organisasjon med kontor og ansatte i alle fylker. Ingen annen organisasjon er i stand til å mobilisere så mange medlemmer på kort tid over hele landet som Bondelaget, og dette apparatet må skjerpes kontinuerlig. Gode politiske kontakter på toppnivå, kombinert med rollen som administrativ leder i bondelaget, gir Skorge mye makt i landbruks-Norge."
  },
  {
	firstName: "Hanne",
	lastName: "Refsholt",
	img:
	  require('./img/Hanne-Refsholt.jpg'),
	key:"10",
	gender:"f",
    profession:"Konsernsjef i Tine",
    residence:"Norge",
    bio:"Konsernsjef Tine. Konsernsjefen i Tine leverer gode resultater i år som i fjor, og råvareleverandørene kan glede seg over etterbetaling og god melkepris. Ledelsen av 5.000 ansatte og over 30 industrianlegg er hennes daglige ansvar. Refsholt har gått gradene i Tine og har stått rakrygget gjennom mediestormer som Tine-Ica-saken i 2005 og smørkrisen i 2011. Hun har vist at hun har styrke til å kjempe og stå løpet ut både internt og eksternt. Hanne Refsholt har vært adm. dir. i Tine i 12 år, er selskapets mest profilerte ansikt utad, og har opparbeidet seg stor innflytelse og makt som landbrukssamvirkets førstedame. En av utfordringene for Tine-sjefen i årene framover blir å tilpasse seg et marked uten eksportsubsidier for Jarlsbergosten."
  },
  {
	firstName: "Melkeroboten",
	lastName: "",
	img:
	  require('./img/Melkeroboten.jpg'),
	key:"11",
	gender:"none",
    profession:"Robot",
    residence:"Norge",
    bio:"Teknologi. Med over 2000 solgte i Norge har melkeroboten svært stor påvirkning på strukturutviklingen i landbruket"
},
{
  firstName: "Siv",
  lastName: "Jensen",
  img:
    require('./img/Siv-Jensen.jpg'),
  key:"12",
  gender:"f",
  profession:"Finansminister",
  residence:"Norge",
  bio:"Finansminister. Sitter på pengesekken og har det avgjørende ordet når det gjelder skatter og avgifter til bøndene."
}
];


ReactDOM.render(<App names={names} />, document.getElementById('root'));
//registerServiceWorker();
