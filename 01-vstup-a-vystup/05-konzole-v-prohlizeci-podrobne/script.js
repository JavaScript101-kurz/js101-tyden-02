console.log('%c Výstup do konzole v prohlížeči ', 'background:black;color:yellow;');

// Příprava proměnných
const jmeno = 'Jana';
const prijmeni = 'Nováková';
const vek = 32;

// Console.log může mít více parametrů
// Do konzole se vypíšou za sebou a jsou odděleny mezerou
console.log(jmeno, prijmeni);
console.log('Jmenuji se', jmeno, prijmeni, 'a je mi', vek, 'let.');

// Substituční řetězce
// Do textu lze vložit speciální symboly,
// místo kterých se na výstupu doplní hodnoty
// následujicích parametrů.
// Symboly:
// - %s vypíše hodnotu jako textový řetězec
// - %d nebo %i značí celé číslo
// - %f představuje desetinné číslo
// - %o je pro objekty, které pak jdou rozkliknout
//   a dále zkoumat jejich vlastnosti
console.log('Moje jméno je %s %s a je mi %d let.', jmeno, prijmeni, vek);


// Stylování console.logu
// Speciální symbol %c, za který jde dosadit CSS styl
console.log('%c Žlutý text na černém pozadí', 'color:yellow;background:black;');
console.log('Bez stylu, %cČerveně a %cModře', 'color: red;', 'color: blue;');


// Speciální typy console.logu
// console.error, .info a .warn
console.error('chybové hlášení');
console.info('informace');
console.warn('varování');


// console.table - zobrazování dat v tabulce
// pro pole
const jmena = ['Jana', 'Eva', 'Alena'];
console.log(jmena);
console.table(jmena);

// pro objekty
const osoba = {
	jmeno: 'Lenka',
	prijmeni: 'Novotná',
	vek: 29,
	maRidicak: true
};
console.log(osoba);
console.table(osoba);

// pro pole objektů
const zamestnanci = [
	{ jmeno: 'Jana', prijmeni: 'Novotná', vek: 23},
	{ jmeno: 'Alena', prijmeni: 'Dobrovská', vek: 31},
	{ jmeno: 'Eva', prijmeni: 'Vyskočilová', vek: 27},
];
console.log(zamestnanci);
console.table(zamestnanci);
