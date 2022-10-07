
myArray = Array(1, 2, 3, 4, 5, 6, 7, 8, 9)

for (i in myArray) {
    if myArray[i] == 2 || 3 { 
        continue
    }
    else {
        text += `The number is ${i}`
    };
}