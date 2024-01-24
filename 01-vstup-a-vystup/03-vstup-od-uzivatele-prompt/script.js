console.log('%c Vstup od uživatele pomocí prompt ', 'background:black;color:yellow;');

// prompt() zobrazí vyskakovací okno,
// kam jde zadat hodnota
const jmeno = prompt('Jak se jmenuješ?');


// pole pro zadávání může mít
// předvyplněnou výchozí hodnotu
const jmeno2 = prompt("Jak se jmenuješ?", "Harry Potter");


// pozor při zadávání čísla, hodnota se vrátí jako text
// potřebujeme převézt na číslo
const vek = Number(prompt('Kolik je ti let?'));
