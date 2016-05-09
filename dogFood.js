var inputEl= document.getElementById("input");
var getDogFood = new XMLHttpRequest();
getDogFood.addEventListener("load", printToDomDog);
getDogFood.open("GET", "dogFood.json");
getDogFood.send();

function printToDomDog () {
	var dogFood= JSON.parse(this.responseText);
	var string="";
	// For loops to add to DOM
	// Brand Names
	for (var i=0; i<dogFood.dog_brands.length; i++) {
		var dog_brands= dogFood.dog_brands[i];
		string+= `<div class='col-md-6'><h2>${dog_brands.name}</h2>`;
		// Brand Types
		for(var j=0; j<dog_brands.types.length; j++) {
			var dogFoodTypes= dog_brands.types[j];
			string+=`<div class='col-md-6 innerRow'><h4>${dogFoodTypes.type}</h4>`;
			// Volume and Price
			for(var x=0; x<dogFoodTypes.volumes.length; x++) {
				var dogFoodVolume = dogFoodTypes.volumes[x]
				string+=`<div class='col-md-6 innerRows'><p>Volume: ${dogFoodVolume.name}</p>
								 <p>Price: $${dogFoodVolume.price} </p></div>`;
			}
			string+=`</div>`;
		}
 		string+= `</div>`;
 	}
 	inputEl.innerHTML=  string;
}
