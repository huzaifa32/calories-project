const options = {
	method: 'GET',
	headers: {
		'X-API-Key': 'FWCVGnBwsefV8MjpiY/vrg==PWQTDpjj7XC8S03d',
		
	}
};

var query = prompt("Enter A Food Item");



fetch('https://api.calorieninjas.com/v1/nutrition?query='+query, options)
.then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayItem(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
    
    




function displayItem(data){
    const food = data.items[0];
    const foodDiv = document.getElementById("Food");
    
    const foodName = food.name;
    const cals = food.calories;
    const carbs = food.carbohydrates_total_g;
    const chol = food.cholesterol_mg;
    const fatSat = food.fat_saturated_g;
    const fatTotal = food.fat_total_g;
    const fiber = food.fiber_g;
    const potassium = food.potassium_mg;
    const protein = food.protein_g;
    const sodium = food.sodium_mg;
    const sugar = food.sugar_g;
    



    const heading = document.createElement("h1");
    const itemText = document.createElement("h2");

    heading.innerHTML = foodName+" ("+food.serving_size_g+"g) ";
    foodDiv.appendChild(heading);

    itemText.innerHTML = "Calories: "+ cals +"\n"+"Carbohydrates: "+ carbs+"g"+"\n"+"Cholesterol: "+ chol+"mg"+"\n"+"Saturated Fat: "+ fatSat+"g"+"\n"+"Total Fat: "+ fatTotal+"g"+"\n"+"Fiber: "+ fiber+"g"+"\n"+"Potassium: "+ potassium+"mg"+"\n"+"Protein: "+ protein+"g"+"\n"+"Sodium: "+ sodium+"mg"+"\n"+"Sugars: "+ sugar+"g";
    foodDiv.appendChild(itemText);

}



