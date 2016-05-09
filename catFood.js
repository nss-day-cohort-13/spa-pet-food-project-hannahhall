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
		var cat_brands= catFood.cat_brands[i];
		string+= `<div class='col-md-6'><h2>${cat_brands.name}</h2>
							<h4>${cat_brands.breed}</h4>`;
		// Brand Type
		for(j=0; j<cat_brands.types.length; j++) {
			var catBrandTypes= cat_brands.types[j];
			string+=`<div class='col-md-6 innerRow'><h4>${catBrandTypes.type}</h4>`;
			// Volume and Price
			for(x=0; x<catBrandTypes.volumes.length; x++) {
				var catTypeVolume= catBrandTypes.volumes[x];
				if(catBrandTypes.volumes.length===undefined) {
					break
				} else {
					string+=`<div class='col-md-6 innerRows'><p>Volume: ${catTypeVolume.name}</p>
						 <p>Price: $${catTypeVolume.price} </p></div>`;
		 		}
			}
		 	string+=`</div>`;
		}
 		string+= `</div>`;
 	}
 	inputCat.innerHTML=  string;
}
