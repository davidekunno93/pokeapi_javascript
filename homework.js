let doc = document
let body = doc.body

const getFunction = async () => {
    // assign input value to poke variable (make it lower case)
    const poke = doc.getElementById('pokemon-name').value
    console.log(poke);
    // use poke variable to target pokemon in api call
    const endpoint = new URL(`https://pokeapi.co/api/v2/pokemon/${poke.toLowerCase()}`);
    const response = await fetch(endpoint)
    // if no page found using poke for api call - send alert Pokemon not found
    if (response.status === 404){
        alert("Pokemon not found");
        return;
    }
    const data = await response.json();
    
    
    // take the data elsewhere
    let img = data.sprites.other.dream_world.front_default
    let name = poke[0].toUpperCase()+poke.slice(1).toLowerCase()
    let hp = data.stats[0].base_stat
    let att = data.stats[1].base_stat
    let def = data.stats[2].base_stat

    
    // create pokemon display element
    const poke_div = doc.createElement('div')
    // clear poke_div object
    let js_object = doc.querySelector('#javascript-object')
    if (js_object){
        console.log("JS is here!")
        js_object.remove()
    } 
    poke_div.classList.add('center-element', 'bg-color', 'fifty', 'flex-c')
    poke_div.id = 'javascript-object'

    // col1 w image inside
    const poke_div_child = doc.createElement('div')
    poke_div_child.innerHTML = `<img class="center-element" src="${img}">`

    // col2 - name of pokemon
    const poke_div_child2 = doc.createElement('div')
    poke_div_child2.classList.add('bg-color2', 'poketext', 'center-text')
    poke_div_child2.style.fontSize = 'xx-large'
    poke_div_child2.innerText = name

    // col3 - stats
    const poke_div_child3 = doc.createElement('div')
    poke_div_child3.classList.add('bg-color', 'poketext', 'flex-r')
    // col3 row1
    const poke_div_child3_child = doc.createElement('div');
    poke_div_child3_child.classList.add('center-text');
    poke_div_child3_child.style.flex = '1';
    poke_div_child3_child.innerText = `HP: ${hp}`
    // col3 row2
    const poke_div_child3_child2 = doc.createElement('div');
    poke_div_child3_child2.classList.add('center-text');
    poke_div_child3_child2.style.flex = '1';
    poke_div_child3_child2.innerText = `ATT: ${att}`
    // col3 row3
    const poke_div_child3_child3 = doc.createElement('div');
    poke_div_child3_child3.classList.add('center-text');
    poke_div_child3_child3.style.flex = '1';
    poke_div_child3_child3.innerText = `DEF: ${def}`


    poke_div.appendChild(poke_div_child)
    poke_div.appendChild(poke_div_child2)
    poke_div.appendChild(poke_div_child3)
    poke_div_child3.appendChild(poke_div_child3_child)
    poke_div_child3.appendChild(poke_div_child3_child2)
    poke_div_child3.appendChild(poke_div_child3_child3)
    
    body.append(poke_div)
    
}

// input capture - the actual input value is captured within the function
const actionBtn = doc.getElementById('button-addon2')
actionBtn.addEventListener('click', getFunction)






 