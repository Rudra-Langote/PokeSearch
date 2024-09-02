async function serching() {
    let pokemon = document.getElementById("name").value.toLowerCase()
    console.log(pokemon)
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let data2 = await data.json()
    console.log(data2)
    let namee = data2.name
    let hight = data2.height
    let img = data2.sprites.front_default
    let wight = data2.weight
    let typess = data2.types[0].type.name
    let html = `
    <div class="main-card">
    <img src="${img}" alt="">
    <h3>${namee}</h3>
    <div class="detals">
        <div class="d"><span>Hight :</span><span>${hight} foot</span></div>
        <div class="d"><span>Wight :</span><span>${wight} kg</span></div>
        <div class="d"><span>Type  :</span><span>${typess}</span></div>
    </div>`

    document.getElementById("cd").innerHTML = html

}
var pokemon = []
var pokemon_name = []
async function cardshow() {
    try {
        
        let i =0;
        while(i < 13) {
            for(let j = i*100+1;j<=(i+1)*100;j++){
            const url = `https://pokeapi.co/api/v2/pokemon/${j}`;
            pokemon.push(await fetch(url).then(res => res.json()));
            
            }
            
            await display(pokemon)
            pokemon = []
            i++;
        }
        
        
        
        

    } catch (error) {
        console.log(error)
    }
}
cardshow()
async function display(pok) {
    
    let i = 1
    pok.forEach(element => {
        let html2 = `<div class="card">
    <img class="card-img" height="150px" src="${element.sprites.front_default}" alt="">
    <span class="card-ttle">${element.forms[0].name}</span>
    </div>`
        document.getElementById("all-cards").innerHTML += html2
        i++
    });

}


