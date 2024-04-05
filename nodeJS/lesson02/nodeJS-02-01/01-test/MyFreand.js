function friend(friends) {
    let lengths = [];
    for (let i = 0; i < friends.length; i++) {
        lengths.push(friends[i].length);
    }
    let filteredNames = friends.filter((name, index) => lengths[index] === 4);
    return filteredNames;
}


let friends = ["Ryan", "Kieran", "Mark"];
let result = friend(friends);
console.log(result);


