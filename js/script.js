/* Amikor a játékos rákattint egy kártyára, az egy egyszerű animáció kíséretében megfordul, 
felfedve az ábrát
- Az első kártyára való kattintáskor elindul egy számláló, amely a játékidőt mutatja
 perc:másodperc formában
- Amennyiben egymás után két felfordított kártyán ugyanaz az ábra szerepel,
 azokat felfordítva kell hagyni a játék végéig, többet nem lehet rájuk kattintani
- Amennyiben a két ábra eltérő, mind a kettőt automatikusan vissza kell forgatni
- A játéknak akkor van vége, amikor az összes kártya képes oldala látszik
- A számláló a játék végén megáll
- 5 másodperc múlva a számláló nullázódik, és az összes kártya visszafordul*/



/*Math.random: generálunk egy random számot mindegyik divhez.set - tel lehet megoldani
hogy egyediek legyenek a számok.Addig futtajuk foreach amíg nem lesz a hossza 10
Vagy van egy 1 - 10 tömböm, amit randomizálok

mikor van kész:
ha visibility-vel állítom a láthatóságot: az összes kártya hidden-e
ha a változóban gyűjtöd, akkor ha eljutottunk 5-ig, akkor van minden megfordítva

eventlistenert ne addoljunk, remove-oljunk, forEachbe ne tegyük bele 
mert többször lefut

setAttribute('disabled',true) ahhoz, hogy ne legyen kattintható az elem bizonyos 
esetekben

az idő lenullázása
setinterval párja a clearinterval

*/

const gameContainer = document.querySelector(".game-container");

const cards = document.querySelectorAll(".card");



const iconBus = document.querySelector
const icons = document.querySelector[".fa-bus", ".fa-star", ".fa-bell", ".fa-heart", ".fa-camera"];
console.log(iconBus);
const copyIcons = [];

icons.forEach((icon) => {
    copyIcons.push(icon);
});

const doubleIconsArray = icons.concat(copyIcons);

const randomArray = Math.random[doubleIconsArray];
console.log(randomArray);




// document create