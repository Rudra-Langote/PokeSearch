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
        let th1 = 1, th2 = 201, th3 = 401, th4 = 601, th5 = 801

        for (th1; th1 < th2; th1++) {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${th1}`)
            let data = await response.json()
            pokemon[th1] = data.name
            pokemon_name[th1] = data.sprites.front_default
        }

        for (th2; th2 < th3; th2++) {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${th2}`)
            let data = await response.json()
            pokemon[th2] = data.name
            pokemon_name[th2] = data.sprites.front_default
        }
        for (th3; th3 < th4; th3++) {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${th3}`)
            let data = await response.json()
            pokemon[th3] = data.name
            pokemon_name[th3] = data.sprites.front_default
        }
        for (th4; th4 < th5; th4++) {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${th4}`)
            let data = await response.json()
            pokemon[th4] = data.name
            pokemon_name[th4] = data.sprites.front_default
        }
        try {
            while (true) {

                var response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${th5}`)
                if (!response.ok) {
                    break;
                }
                let data = await response.json()
                pokemon[th5] = data.name
                pokemon_name[th5] = data.sprites.front_default
                th5++
            }
        } catch (error) {
            console.log(error)
        }

    } catch (error) {
        console.log(error)
    }
}
async function display(){
    await cardshow()
    let i = 1
    pokemon.forEach(element => {
        let html2 = `<div class="card">
    <img class="card-img" height="100px" src="${pokemon_name[i]}" alt="">
    <span class="card-ttle">${element}</span>
    </div>`
        document.getElementById("all-cards").innerHTML += html2
        i++
    });
    
}
display()


