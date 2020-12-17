// Write your JavaScript code here!

window.addEventListener("load", () => {
   let form = document.querySelector("form");
   form.addEventListener ("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");

       let items = document.getElementById("faultyItems");
       let launchStatus = document.getElementById("launchStatus");
       let fuelStatus = document.getElementById("fuelStatus");
       let cargoStatus = document.getElementById("cargoStatus");
       let ready = true;

       if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         event.preventDefault();
         alert("All fields are required.")
       }

       if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         event.preventDefault();
         alert("Make sure to enter valid information for each field.")
       
       } else {
            items.style.visibility = "visible";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${ pilotNameInput.value + ' ' }Ready`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${ copilotNameInput.value + ' ' }Ready`;

            if (fuelLevelInput.value < 10000) {
                ready = false;
               fuelStatus.innerHTML = "Not enough fuel for journey.";
            } else {
                fuelStatus.innerHTML = "Enough fuel for journey.";
            };

            if (cargoMassInput.value > 10000) {
               ready = false;
               cargoStatus.innerHTML = "Too much mass for take off.";
            } else {
               cargoStatus.innerHTML = "Cargo is appropriate for launch.";
            };
            if (ready) {
               items.style.visibility = "visible";
               launchStatus.style.color = "green";
               launchStatus.innerHTML = "Shuttle is ready for launch.";
            } else {
               launchStatus.style.color = "red";
               launchStatus.innerHTML = "Shuttle is not ready for launch."; 
            };
         };                  
   });
});

window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         let targets = document.getElementById("missionTarget");
         let targetsLength = json.length - 1
         // console.log(targetsLength);
         let random = Math.round(Math.random() *targetsLength);
         // console.log(random);
         let target = json[random];

         targets.innerHTML= `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${target.name}</li>
            <li>Diameter: ${target.diameter}</li>
            <li>Star: ${target.star}</li>
            <li>Distance from Earth: ${target.distance}</li>
            <li>Number of Moons: ${target.moons}</li>
         </ol>
         <img src="${target.image}">
         `;
      });  
   } );
});





/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
