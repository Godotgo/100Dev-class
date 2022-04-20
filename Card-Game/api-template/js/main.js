//Example fetch using pokemonapi.co

fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
.then(res => res.json()) // parse response as JSON
.then(data => {
  if(!data.deck_id && data.remaining !== 0){
  console.log(data) 
  localStorage.setItem("deckID",data.deck_id)    
}})
.catch(err => {
    console.log(`error ${err}`)
});

let deckId = localStorage.getItem("deckID")


document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if(data.success===true){
        console.log(data)
      }else fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        localStorage.setItem("deckID",data.deck_id)
        console.log(data) 
        deckId = localStorage.getItem("deckID")
        fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
     console.log(data)
      })
      .catch(err => {
        console.log(`error ${err}`)
      })
      })
      .catch(err => {
        console.log(`error ${err}`)
      });})
      .catch(err => {
          console.log(`error ${err}`)
      });
}

