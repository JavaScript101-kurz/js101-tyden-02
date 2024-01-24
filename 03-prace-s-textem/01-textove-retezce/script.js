console.log('%c Textové řetězce a template literal ', 'background:black;color:yellow;');

// typy uvozovek
const text1 = "dvojité uvozovky";
const text2 = 'jednoduché uvozovky neboli apostrofy';
const text3 = `zpětné uvozovky neboli backticky`;



// Text v "uvozovkách" uvnitř uvozovek.
// toto nejde - JS by nevěděl, kde text začíná a končí
// const spatne = "Alena řekla "Učím se JavaScript" a odešla.";

// použijeme druhý typ uvozovek na ohraničení řetězce
const dobre1 = 'Alena řekla "Učím se JavaScript" a odešla.';
const dobre2 = "Alena řekla 'Učím se JavaScript' a odešla.";

// použijeme zpětné lomítko pro spefiální znaky
const dobre3 = "Alena řekla \"Učím se JavaScript\" a odešla.";



// Spojování textových řetězců
const jmeno = 'Alena';
const vek = 27;

console.log('Jmenuji se ' + jmeno + ' a je mi ' + vek + ' let.');


// Template literal / template string
const viceRadku = `
  Text klidně může mít více řádků
  a může samozřejmě obsahovat
  "ostatní" typy 'uvozovek',
  což je cool.
`;

const jedenRadek = `Ale samozřejmě funguje i na jednom řádku.`;

// interpolace proměnných a výrazů pomocí ${}
console.log(`Jmenuji se ${jmeno} a je mi ${vek} let.`);
console.log(`Výsledek výpočtu je ${ Math.round(76 / 13.5) }`);



// Délka textového řetězce
// string.length
const prijmeni = 'Držgrešle';
console.log(prijmeni.length);



// Přístup k jednotlivým znakům pomocí indexu
// string[index]
console.log( prijmeni[2] );


