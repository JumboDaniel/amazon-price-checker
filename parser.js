const nightmare =require('nightmare')()
checkPrice()
// "priceblock_ourprice"
// "hero-name"
async function checkPrice(){
    const priceString = await nightmare
    .goto("http://localhost:3000/")
    .wait(".hero-name")
    .evaluate(()=> document.getElementsByClassName("hero-name").innerText )
    .end()
    console.log(priceString)
    // const priceNumber = 
}