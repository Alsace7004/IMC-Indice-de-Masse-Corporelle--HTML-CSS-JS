
 var first_select = document.querySelector('#first_select');
 var second_select = document.querySelector('#second_select');
 var btn = document.querySelector('#btn');

 btn.addEventListener('click',()=>{
    var first_select_val = first_select.value;
    var second_select_val = second_select.value;
 
   
    alert("Vous avez choisi:"+first_select_val+" pour first_select \n et "+second_select_val+" pour second_select");
 })
