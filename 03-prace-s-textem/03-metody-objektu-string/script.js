console.log('%c Metody objektu String ', 'background:black;color:yellow;');


// převod na velká nebo malá písmena
const text1 ='různě VELKÁ písmENA';
console.log( text1.toLowerCase() );
console.log( text1.toUpperCase() );



// existuje řetězec v textu?
const text2 = 'Skákal pes přes oves';
console.log( text2.includes('pes') );   // výsledek: true
console.log( text2.includes('kočka') ); // výsledek: false



// začíná/končí text na daný řetězec
const text3 = 'Jeníček a Mařenka jsou původní lovci čarodějnic';

console.log( text3.startsWith('Jeníček') );
console.log( text3.startsWith('Pepík') );

console.log( text3.endsWith('dějnic') );
console.log( text3.endsWith('Nic') );



// nalezení pozice řetězce uvnitř textu
const text4 = 'Mámo, táto, v komoře je myš.';
console.log( text4.indexOf('táto') );
console.log( text4.indexOf('babi') );



// hledání bez ohledu na velikost písmen
const text5 = 'Na veLIkoSti čAstO záLEží';
const hledat = 'často';

console.log( text5.includes(hledat) );

// pro účely hledání převedeme oba texty na malá písmena
console.log( text5.toLowerCase().includes( hledat.toLowerCase() ) );



// nahrazování textu
const text6 = 'Líný pes je pes, který nikdy neštěká';

console.log( text6.replace('pes', 'krokodýl') );
console.log( text6.replaceAll('pes', 'krokodýl') );



// získání části textu
const text7 = 'Běží liška k táboru';

// od šestého písmene až do konce
console.log( text7.slice(5) );

// od šestého písmene (včetně) do jedenáctého písmene (nevčetně)
console.log( text7.slice(5, 10) );

// od šestého písmene od konce (včetně) až do konce
console.log( text7.slice(-6) );

// od šestého písmene od konce (včetně) až do prvního písmene od konce (nevčetně)
console.log( text7.slice(-6, -1) );



// text s mezerami na začátku i na konci
const text8 = '  pokusný text  ';

// trim() odřízne mezery na začátku i na konci
console.log( text8.trim() );

// trimStart() odřízne mezery jen na začátku
// trimEnd() odřízne mezery jen na konci
console.log( text8.trimStart() );
console.log( text8.trimEnd() );


