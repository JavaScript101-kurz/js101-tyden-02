console.log('%c Výpis textu do stránky ', 'background:black;color:yellow;');


// Vložení textu do těla stránky
document.body.innerHTML += 'Ahoj';


// Vložení HTML značky
document.body.innerHTML += '<h2>Nadpis</h2>';
document.body.innerHTML += '<p>Toto je text.</p>';


// Zobrazení obsahu proměnné
const jmeno = 'Alena Nováková';
const vek = 17;

document.body.innerHTML += '<p>Jmenuji se ' + jmeno + '.</p>';
document.body.innerHTML += vek;