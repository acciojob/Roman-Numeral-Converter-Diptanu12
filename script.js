function convertToRoman(num) {
    const numerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let romanNumerals = '';

    for (const [symbol, value] of numerals) {
        while (num >= value) {
            romanNumerals += symbol;
            num -= value;
        }
    }

    return romanNumerals;
}

// Examples
console.log(convertToRoman(14));    
console.log(convertToRoman(58));   
console.log(convertToRoman(1994));

// Do not edit below this line
module.exports = convertToRoman;
