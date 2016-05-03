var inputCat= document.getElementById("inputCat");
var getCatFood = new XMLHttpRequest();
getCatFood.addEventListener("load", printToDomCat);
getCatFood.open("GET", "catFood.json");
getCatFood.send();

function printToDomCat () {
	var catFood= JSON.parse(this.responseText);
	var string="";
	// For loops to add to DOM
	// Brand Name
	for (i=0; i<catFood.cat_brands.length; i++) {
		string+= `<div class='col-md-6'><h2>${catFood.cat_brands[i].name}</h2>
							<h4>${catFood.cat_brands[i].breed}</h4>`;
		// Brand Type
		for(j=0; j<catFood.cat_brands[i].types.length; j++) {
			string+=`<div class='col-md-6 innerRow'><h4>${catFood.cat_brands[i].types[j].type}</h4>`;
			// Volume and Price
			for(x=0; x<catFood.cat_brands[i].types[j].volumes.length; x++) {
				if(catFood.cat_brands[i].types[j].volumes.length===undefined) {
					break
				} else {
					string+=`<div class='col-md-6 innerRows'><p>Volume: ${catFood.cat_brands[i].types[j].volumes[x].name}</p>
						 <p>Price: $${catFood.cat_brands[i].types[j].volumes[x].price} </p></div>`;
		 		}
			}
		 	string+=`</div>`;
		}
 		string+= `</div>`;
 	}
 	inputCat.innerHTML=  string;
}
