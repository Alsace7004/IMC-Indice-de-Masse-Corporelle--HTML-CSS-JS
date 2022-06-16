
var taille = document.querySelector("#taille");
var poids = document.querySelector("#poids");
var valeur_imc = document.querySelector(".valeur_imc");
var result_container = document.querySelector(".result_container");
var btn = document.querySelector(".btn");

btn.addEventListener('click',()=>{
    var taille_val = (taille.value);
    var poids_val = poids.value;
    console.log("valeur de taille_val:",taille_val);
    console.log("valeur de poids_val:",poids_val);
    if(taille_val =="" || poids_val == ""){
        alert("Veuillez remplir les champs svp!!!")
        return;
    }else if(isNaN(taille_val)){
        alert("Veuillez entrer un entier pour la taille svp!!!");
        return;
    }
    else if((taille_val.includes("."))){
        alert("Veuillez entrer votre taille en cm svp!!!")
        return;
    }else if(isNaN(poids_val)){
        alert("Veuillez entrer un réel pour le poids svp!!!")
        return;
    }else{
        var m = taille_val*(0.01);
        //console.log("valeur en m:",m);
        var imc = poids_val /(m*m);
        imc = imc.toFixed(2);
        valeur_imc.innerHTML = imc;
        result_container.style.display="block";
    }

    

})