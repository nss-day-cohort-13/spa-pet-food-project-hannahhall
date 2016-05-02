var inputEl= document.getElementById("input");
var getDogFood = new XMLHttpRequest();
getDogFood.addEventListener("load", printToDom);
getDogFood.open("GET", "dogFood.json");
getDogFood.send();

function printToDom () {
	var dogFood= JSON.parse(this.responseText);
	// dogFood= dogFood.dog_brands[0].types;
	console.log("the Whole thing: ", dogFood.dog_brands);

// Keys for Chuck Wagon
	console.log("chuck wagon types array: ", dogFood.dog_brands[0].types);//loop.length);
	console.log("type name: ", dogFood.dog_brands[0].types[0].type);
	console.log("volumes array", dogFood.dog_brands[0].types[0].volumes.length); //loop.length

// Keys for Purina
	console.log("purina types: ", dogFood.dog_brands[1].types);

	for (i=0; i<dogFood.dog_brands.length; i++) {
		inputEl.innerHTML+= "<div class='col-md-6'>" + dogFood.dog_brands[i].name;
		for(j=0; j<dogFood.dog_brands[0].types.length; j++) {
			inputEl.innerHTML+="<p>Type: " + dogFood.dog_brands[j].types[j].type + "</p>";
			for(x=0; x<dogFood.dog_brands[0].types[0].volumes.length; x++) {
				inputEl.innerHTML+=	"<p> Volume: " + dogFood.dog_brands[x].types[x].volumes[x].name + "</p>" +
														"<p> Price: " + dogFood.dog_brands[x].types[x].volumes[x].price + "</p></div>";
			}
		}
 	}



}
