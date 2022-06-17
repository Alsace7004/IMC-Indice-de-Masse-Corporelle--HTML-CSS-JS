
var taille = document.querySelector("#taille");
var poids = document.querySelector("#poids");
var valeur_imc = document.querySelector(".valeur_imc");
var result_container = document.querySelector(".result_container");
var conseil_imc = document.querySelector(".conseil_imc");
var opinion_imc = document.querySelector(".opinion_imc");
var btn = document.querySelector(".btn");

btn.addEventListener('click',()=>{
    var taille_val = taille.value;
    var poids_val = poids.value;
    /*console.log("valeur de taille_val:",taille_val);
    console.log("valeur de poids_val:",poids_val);*/
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
        //conertion de la taille (cm en m)
        var m = taille_val*(0.01);
        //calcul de l'IMC : IMC = poids en kg / taille² en m.
        var imc = poids_val /(m*m);
        //arrondi a 2 chiffres apres la virgule
        imc = imc.toFixed(2);
        //affichage du resultat(IMC Sur la vue)
        valeur_imc.innerHTML = imc;
        //affichage du block du resultat
        result_container.style.display="block";
        if(imc <= 18.4){
            opinion_imc.innerHTML = "On considère que la personne est maigre !!!";
            conseil_imc.innerHTML="Votre poids apparaît insuffisant par rapport à votre taille. Cela peut être le symptôme d'une maladie ou de difficultés psychologiques. Mais cet indice faible peut également être considéré comme normal si votre constitution naturelle est frêle. Nous vous conseillons de consulter un médecin qui évaluera le degré et la nature de cette insuffisance pondérale.";
        }else if(imc>=18.5 && imc<=24.9){
            opinion_imc.innerHTML = "On considère que la personne a une Corpulence normale !!!";
            conseil_imc.innerHTML="Votre poids est normal par rapport à votre taille. Une alimentation saine et équilibrée, une activité physique régulière (natation, marche, vélo...) vous aideront à conserver cet équilibre tout au long de votre vie. ";
        }else if(imc>=25 && imc<=29.9){
            opinion_imc.innerHTML = "On considère que la personne est en Surpoids";
            conseil_imc.innerHTML = "Votre poids apparaît légèrement supérieur au poids normal et doit vous alerter. A long terme et chez certaines personnes, le surpoids peut nuire à votre santé et augmenter le risque de maladies cardiovasculaires, d'hypertension artérielle, de diabète... Votre médecin sera en mesure de vous apporter les conseils adaptés à votre cas particulier. ";
        }else if(imc>=30 && imc<=34.9){
            opinion_imc.innerHTML = "On considère que la personne est en Obésité modérée";
            conseil_imc.innerHTML = "Votre poids apparaît supérieur au poids normal et doit vous alerter. A long terme le surpoids peut nuire à votre santé : il accroît nettement les risques de maladies cardiovasculaires, d'hypertension artérielle, de diabète, d'arthrose, de cancer, etc. Un changement dans vos habitudes de vie devrait être envisagé avec l'aide de votre médecin. Il sera en mesure de vous apporter les conseils adaptés pour vous aider à perdre du poids. ";
        }else if(imc>=35 && imc<=39.9){
            opinion_imc.innerHTML = "On considère que la personne est en Obésité sévère";
            conseil_imc.innerHTML="Votre poids apparaît nettement supérieur au poids normal et doit vous alerter. Le surpoids accroît très fortement les risques de maladies cardiovasculaires, d'hypertension artérielle, de diabète, d'arthrose, de calculs biliaires, de cancer, etc. Un changement dans vos habitudes de vie doit être envisagé et une consultation de votre médecin s'impose. Il sera en mesure de vous apporter les conseils adaptés pour vous aider à perdre du poids.";
        }else if(imc>=40.0){
            opinion_imc.innerHTML = "On considère que la personne est en Obésité morbide ou massive";
            conseil_imc.innerHTML = "Votre poids apparaît très nettement supérieur au poids normal et doit vous alerter. L’obésité nuit à la santé et accroît très fortement les risques de maladies cardiovasculaires, d'hypertension artérielle, de diabète, d'arthrose, de maladies respiratoires, de cancer, etc. Une consultation médicale s'impose pour une prise en charge adaptée.";
        }
    }

    

})