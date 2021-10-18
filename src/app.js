console.log("Merhaba Kodlama.io")
// JS type safe degildir!!!
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "Ankara"

{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDunn = 11  bunu yapamiyoruz!!!

console.log(euroDun)

// array
//camelCasing : kelimenin ilk harfi kucuktur
//PascalCasing : kelimenin ilk harfi buyuk
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Ozel Komut Kredileri"]
console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>"+konutKredileri[index]+"</li>") 
    
}

console.log("</ul>")


// console.log(konutKredileri)

