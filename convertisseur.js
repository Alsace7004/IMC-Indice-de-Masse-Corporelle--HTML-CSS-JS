// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// for selecting different controls
var input = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;


// Lance un Event quand le select change
fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});

// Lance un Event quand le select change
toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});

//Lorsqu'on click sur le bouton Convertir
convert.addEventListener("click", ()=>{
    if(input.value == ""){
        alert("Veuillez entrer le montant a convertir!!!")
    }else if(isNaN(input.value )){
        alert("Veuillez entrer un réel pour le montant svp!!!")
    }else if(fromCurrecy.value == "" || toCurrecy.value == ""){
        alert("Veuillez choisir des devises svp!!!")
    }else{
        getResults();
    }
});

// function qui recupere les resultats
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}

// affiche le resulat de la convertion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    /*console.log("valeur de searchValue",input.value)
    console.log("valeur de fromRate",fromRate)
    console.log("valeur de toRate",toRate)*/
    if(toRate == undefined || fromRate == undefined){
        alert("Veuillez choisir des devises svp!!!")
    }else{
        finalValue.innerHTML = ((toRate / fromRate) * input.value).toFixed(2);
        finalAmount.style.display = "block";
    }

}
