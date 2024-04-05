
function toCamelCase(str) {
    let text = str.replace(/[_-]\w/g, function(match) {
        return match.charAt(1).toUpperCase();
    });
     return console.log(text);
}

toCamelCase('the-stealth-warrior');
toCamelCase('The_Stealth_Warrior');
toCamelCase('The_Stealth-Warrior');





