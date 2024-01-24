console.log('%c Objekt Math ', 'background:black;color:yellow;');

// Math.PI - konstanta, číslo π
const prumer = 2;
const obvodKruhu = 2 * Math.PI * prumer;


// Math.abs() - absolutní hodnota
console.log( Math.abs(5)  );  // výsledek: 5
console.log( Math.abs(-5) );  // výsledek: 5


// Math.min() a Math.max()
// nejmenší a největší hodnota
const nejmensi = Math.min(7, 13, -6, 37, 1054, 8);  // výsledek: -6
const nejvetsi = Math.max(7, 13, -6, 37, 1054, 8);  // výsledek: 1054
console.log(nejmensi, nejvetsi);


// Math.sqrt() - odmocnina
console.log( Math.sqrt(4) );  // výsledek: 2


// Math.round() - matematické zaokrouhlení
console.log( Math.round(1.3) );     // výsledek: 1
console.log( Math.round(1.5) );     // výsledek: 2
console.log( Math.round(1.7) );     // výsledek: 2
// záporná čísla
console.log( Math.round(-1.3) );    // výsledek: -1
console.log( Math.round(-1.5) );    // výsledek: -1 !!!
console.log( Math.round(-1.7) );    // výsledek: -2


// Math.floor() - zaokrouhlení dolů
console.log( Math.floor(1.05) );     // výsledek: 1
console.log( Math.floor(1.95) );     // výsledek: 1
// záporná čísla
console.log( Math.floor(-1.05) );    // výsledek: -2
console.log( Math.floor(-1.95) );    // výsledek: -2


// Math.ceil() - zaokrouhlení nahoru
console.log( Math.ceil(1.05) );     // výsledek: 2
console.log( Math.ceil(1.95) );     // výsledek: 2
// záporná čísla
console.log( Math.ceil(-1.05) );    // výsledek: -1
console.log( Math.ceil(-1.95) );    // výsledek: -1


// Math.trunc() - odříznutí desetinné části
console.log( Math.trunc(1.05) );     // výsledek: 1
console.log( Math.trunc(1.95) );     // výsledek: 1
// záporná čísla
console.log( Math.trunc(-1.05) );    // výsledek: -1
console.log( Math.trunc(-1.95) );    // výsledek: -1



// Náhodná čísla
// Math.random()
console.log( Math.random() );

// náhodné číslo mezi 0 a 9.999999999999...
console.log( Math.random() * 10 );

// náhodné číslo mezi 50 a 60
console.log( Math.round(50 + Math.random() * 10) );

// náhodné číslo mezi 50 a 59
console.log( Math.floor(50 + Math.random() * 10) );

// hod kostkou
const hod = Math.floor(1 + Math.random() * 6);
