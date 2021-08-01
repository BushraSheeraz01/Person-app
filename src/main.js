// 'use strict';

// function counter() {
//   let seconds = 0;
//   setInterval(() => {
//     seconds += 1;
//     document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
//   }, 1000);
// }

// counter();

window.onload = fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(response =>{
      return response.json();
  }).then(function displayResults(response){
      console.log(response[0].name);
      console.log(response[0].username);
      var data=document.getElementById("app");
      for (let i = 0; i <= response.length; i++) {
        console.log(response[i].name);
        data.innerHTML+="<div class='card' id='card1'><h3 class='name'>Name: "+response[i].name+"</h3><div><p><button class='btn btn-primary' type='button' data-toggle='collapse' data-target='#collapseExample"+i+"' aria-expanded='false aria-controls='collapseExample'>Show More</button></p><div class='collapse' id='collapseExample"+i+"'><div class='card-body'><p>Phone: "+response[i].phone+"</p><p>Email: "+response[i].email+"</p><p>Address: "+response[i].address.city+"</p></div></div></div></div>";
      }
  });

