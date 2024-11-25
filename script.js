function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let romanNumerals = '';
    const numerals = Object.values(obj);

    for (let i = 0; i < numerals.length; i++) {
        const [symbol, value] = numerals[i];
        const count = Math.floor(num / value);
        if (count > 0) {
            romanNumerals += symbol.repeat(count);
            num %= value; 
        }

        if (i < numerals.length - 1) {
            const [nextSymbol, nextValue] = numerals[i + 1];
            if (num >= value - nextValue && nextValue < value) {
                romanNumerals += nextSymbol + symbol;
                num -= value - nextValue;
            }
        }
    }

    return romanNumerals;
}

console.log(convertToRoman(14));  






// do not edit below this line
module.exports = convertToRoman
