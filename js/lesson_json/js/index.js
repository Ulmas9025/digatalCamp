const elPoketList = document.querySelector('.js-poke-list');

// for (const poke of pokemon) {
//     console.log(poke);
// }

for (const poke of pokemon) {
    
    const elPokeItem = document.createElement('li');
    const elPokeImg =  document.createElement('img');
    const elPokeTitel = document.createElement('h3');
    const elPokeNum =  document.createElement('span');
    
    elPokeImg.src = poke.img;
    elPokeTitel.textContent = poke.name;
    elPokeNum.textContent = poke.num;

    elPokeItem.appendChild(elPokeImg);
    elPokeItem.appendChild(elPokeTitel);
    elPokeItem.appendChild(elPokeNum);

    elPoketList.appendChild(elPokeItem);

}