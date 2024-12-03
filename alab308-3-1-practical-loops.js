
// === checks if two values are equal both in value and type
// == checks if two values are equal, ignores type
// % is the reminder operator sometimes called modulus operator

// Part 1: Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}


// SKIP!!! Part 2: Prime Time

// Part 3: Feeling Loopy
// Team Option
// const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// let cell1 = "";
// for (const char of csv) {
//     if  (char !== "\n" && char !== ","){
//         cell1 += char;
//     } else if (char !== "," ) {
//         console.log(cell1);
//         cell1 = "";
//     } else if (char == ","){
//         cell1 += char + " "
//     }
//         else {
//             console.log(char)}
// }


// Corrected Code
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cell1 = "";
let row = "";

for (const char of csv) {
    if (char !== "\n" && char !== ",") {
        cell1 += char;
    } else if (char === ",") {
        row += cell1 + " ";
        cell1 = "";
    } else if (char === "\n") {
        row += cell1;
        console.log(row);
        row = "";
        cell1 = "";
    }
}

if (cell1) {
    row += cell1;
    console.log(row);
}








