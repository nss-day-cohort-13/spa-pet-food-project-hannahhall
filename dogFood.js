var inputEl= document.getElementById("input");
var getDogFood = new XMLHttpRequest();
getDogFood.addEventListener("load", printToDomDog);
getDogFood.open("GET", "dogFood.json");
getDogFood.send();

function printToDomDog () {
	var dogFood= JSON.parse(this.responseText);
	var string="";
	// For loops to add to DOM
	for (i=0; i<dogFood.dog_brands.length; i++) {
		string+= `<div class='col-md-6'><h2>${dogFood.dog_brands[i].name}</h2>`;
		for(j=0; j<dogFood.dog_brands[0].types.length; j++) {
			string+=`<div class='col-md-6 innerRow'><h4>${dogFood.dog_brands[j].types[j].type}</h4>`;
			for(x=0; x<dogFood.dog_brands[0].types[0].volumes.length; x++) {
				string+=`<div class='col-md-6 innerRow'><p>Volume: ${dogFood.dog_brands[x].types[x].volumes[x].name}</p>
								 <p>Price: $${dogFood.dog_brands[x].types[x].volumes[x].price} </p>`;
				string+=`</div>`;
			}
			string+=`</div>`;
		}
 		string+= `</div>`;
 	}
 	inputEl.innerHTML=  string;
}
