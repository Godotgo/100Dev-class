//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let drink = document.querySelector('input').value
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
  let i = 0
  loop();
  function loop(){
    setTimeout(function() {
      if(i <20){
        fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            document.querySelector("img").src= data.drinks[i].strDrinkThumb
            document.querySelector("h2").innerText = data.drinks[i].strDrink
            document.querySelector("h3").innerText = data.drinks[i].strInstructions
            })
            .catch(err => {
                console.log(`error ${err}`)
            });
            i++
        }else {i=0}
      loop();
   }, 500);
  }
}