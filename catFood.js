var inputCat= document.getElementById("inputCat");
var getCatFood = new XMLHttpRequest();
getCatFood.addEventListener("load", printToDomCat);
getCatFood.open("GET", "catFood.json");
getCatFood.send();

function printToDomCat () {
	var catFood= JSON.parse(this.responseText);
	var string="";
	console.log(catFood);
	 console.log("purrina types array: ", catFood.cat_brands[0].types);//loop.length);
 	console.log("type name: ", catFood.cat_brands[0].types[0].type);
 	console.log("volumes array", catFood.cat_brands[0].types[0].volumes.length); //loop.length
	// For loops to add to DOM
	// for (i=0; i<catFood.cat_brands.length; i++) {
	// 	string+= `<div class='col-md-6'><h2>${catFood.cat_brands[i].name}</h2>`;
	// 	for(j=0; j<catFood.cat_brands[0].types.length; j++) {
	// 		string+=`<div class='col-md-6 innerRow'><h4>${catFood.cat_brands[j].types[j].type}</h4>`;
			for(x=0; x<catFood.cat_brands[0].types[0].volumes.length; x++) {
				if(catFood.cat_brands[x].types[x].volumes=== undefined) {
						break;
				} else {
				string+=`<div class='col-md-6 innerRow'><p>Volume: ${catFood.cat_brands[x].types[x].volumes[x].name}</p>
								 <p>Price: $${catFood.cat_brands[x].types[x].volumes[x].price} </p>`;
				string+=`</div>`;
			}
			}
		// 	string+=`</div>`;
		// }
 	// 	string+= `</div>`;
 	// }
 	inputCat.innerHTML=  string;
}