var fabbisognoCalorico = localStorage.getItem('fabbisognoCalorico');
fabbisognoCalorico = Math.round(fabbisognoCalorico)

if (fabbisognoCalorico) {
    console.log(`Fabbisogno calorico recuperato: ${fabbisognoCalorico} kcal`);
    // Usa fabbisognoCalorico come necessario nella tua applicazione
} else {
    console.log("Nessun fabbisogno calorico trovato.");
}
const app = document.getElementById('App');
let Tot = document.getElementById('textTotali');
let assunte = document.getElementById('textAssunte');
let rimanenti = document.getElementById('textRimanenti');
const btn = document.querySelectorAll('.button');
const Top = document.getElementById('top');

//let kcalTot = 3500;
//let kcalTot = 0;
let kcalRimanenti = Math.round(fabbisognoCalorico);
//let kcal=0;
let kcalAssunte = 0;
let colazioneDolce = 330;
let colazioneSalata = 435;
let snackDolce = 150;
let snackSalato = 140;
let pranzo = 640;
let pasta = 350;
let carne = 112;
let insalata = 37;
let pizza= 277;
let corsa = 450;
let nuoto = 550;
let yoga = 220;
let pugilato = 700;
let tennis = 500;
let crossfit= 550;


console.log(typeof(kcalRimanenti))
console.log(typeof(fabbisognoCalorico))
         


function updateMargin (){
    if(window.innerWidth < 768){ 
        app.style.marginTop = '0';
       }
       else{
           app.style.marginTop = '100px';
       }
}
window.onload=updateMargin;
window.onresize=updateMargin;

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Effetto di scrolling fluido
    });
}

Top.addEventListener("click",scrollToTop)



Tot.innerText= fabbisognoCalorico;
rimanenti.innerText= kcalRimanenti;

function colazioneD(){
    
    if(kcalAssunte >= fabbisognoCalorico ){
        alert("Hai superato il limite delle Kcal giornaliere")
        return;
    }
    //kcal += colazioneDolce;
    kcalAssunte += colazioneDolce;
    kcalRimanenti -= colazioneDolce;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
    
}

btn[0].addEventListener("click",colazioneD)

function colazioneS(){
    
    if(kcalAssunte >= fabbisognoCalorico ){
        alert("Hai superato il limite delle Kcal giornaliere")
        return;
    }
    //kcal += colazioneSalata;
    kcalAssunte += colazioneSalata;
    kcalRimanenti -= colazioneSalata;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
    
}

btn[1].addEventListener("click",colazioneS)

function snackD(){
    
    if(kcalAssunte >= fabbisognoCalorico ){
        alert("Hai superato il limite delle Kcal giornaliere")
        return;
    }
    //kcal += colazioneSalata;
    kcalAssunte += snackDolce;
    kcalRimanenti -= snackDolce;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
    
}

btn[2].addEventListener("click",snackD)

function snackS(){
    
    if(kcalAssunte >= fabbisognoCalorico ){
        alert("Hai superato il limite delle Kcal giornaliere")
        return;
    }
    //kcal += colazioneSalata;
    kcalAssunte += snackSalato;
    kcalRimanenti -= snackSalato;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
    
}
btn[3].addEventListener("click",snackS)

function pranzoCompleto(){
    
    if(kcalAssunte >= fabbisognoCalorico ){
        alert("Hai superato il limite delle Kcal giornaliere")
        return;
    }
    //kcal += colazioneSalata;
    kcalAssunte += pranzo;
    kcalRimanenti -= pranzo;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
}
btn[4].addEventListener("click",pranzoCompleto)

function consumaPasta(){
    
    if(kcalAssunte >= fabbisognoCalorico ){
        alert("Hai superato il limite delle Kcal giornaliere")
        return;
    }
    //kcal += colazioneSalata;
    kcalAssunte += pasta;
    kcalRimanenti -= pasta;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
}

btn[5].addEventListener("click",consumaPasta)

function consumaCarne(){
    
    if(kcalAssunte >= fabbisognoCalorico ){
        alert("Hai superato il limite delle Kcal giornaliere")
        return;
    }
    //kcal += colazioneSalata;
    kcalAssunte += carne;
    kcalRimanenti -= carne;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
}

btn[6].addEventListener("click",consumaCarne)

function consumaInsalata(){
    
    if(kcalAssunte >= fabbisognoCalorico ){
        alert("Hai superato il limite delle Kcal giornaliere")
        return;
    }
    //kcal += colazioneSalata;
    kcalAssunte +=insalata;
    kcalRimanenti -= insalata;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
}

btn[7].addEventListener("click",consumaInsalata)

function consumaPizza(){
    
    if(kcalAssunte >= fabbisognoCalorico ){
        alert("Hai superato il limite delle Kcal giornaliere")
        return;
    }
    //kcal += colazioneSalata;
    kcalAssunte += pizza;
    kcalRimanenti -= pizza;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
}
btn[8].addEventListener("click",consumaPizza)

function praticaCorsa (){
    if(kcalAssunte < 0){
        alert("Hai bruciato troppe calorie,torna a mangiare")
        return;
    }
    kcalAssunte -= corsa;
    kcalRimanenti += corsa;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
    
    
}

//Funzioni che consumano calorie

btn[9].addEventListener("click",praticaCorsa)

function praticaNuoto (){
    if(kcalAssunte < 0){
        alert("Hai bruciato troppe calorie,torna a mangiare")
        return;
    }
    kcalAssunte -= nuoto;
    kcalRimanenti += nuoto;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
    
}

btn[10].addEventListener("click",praticaNuoto)

function praticaYoga (){
    if(kcalAssunte < 0){
        alert("Hai bruciato troppe calorie,torna a mangiare")
        return;
    }
    kcalAssunte -= yoga;
    kcalRimanenti += yoga;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
    
}

btn[11].addEventListener("click",praticaYoga)

function praticaPugilato (){
    if(kcalAssunte < 0){
        alert("Hai bruciato troppe calorie,torna a mangiare")
        return;
    }
    kcalAssunte -= pugilato;
    kcalRimanenti += pugilato;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
    
}

btn[12].addEventListener("click",praticaPugilato)

function praticaTennis (){
    if(kcalAssunte < 0){
        alert("Hai bruciato troppe calorie,torna a mangiare")
        return;
    }
    kcalAssunte -= tennis;
    kcalRimanenti += tennis;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
    
}

btn[13].addEventListener("click",praticaTennis)

function praticaCrossfit (){
    if(kcalAssunte < 0){
        alert("Hai bruciato troppe calorie,torna a mangiare")
        return;
    }
    kcalAssunte -= crossfit;
    kcalRimanenti += crossfit;
    assunte.innerText=kcalAssunte
    rimanenti.innerText = kcalRimanenti
    
}
btn[14].addEventListener("click",praticaCrossfit)

function reset (){
     
      kcalAssunte = 0;
      kcalRimanenti = Math.round(fabbisognoCalorico);
      assunte.innerText=kcalAssunte
     rimanenti.innerText = kcalRimanenti
    

}
 btn[15].addEventListener("click",reset)

 
 




