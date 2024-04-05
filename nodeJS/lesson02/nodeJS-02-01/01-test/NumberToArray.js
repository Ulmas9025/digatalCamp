function digitize(n) {
    let array = ('' + n).split('').map(function(digit){
        return +digit;
    });
    return array.reverse();
}

console.log(digitize(13253));