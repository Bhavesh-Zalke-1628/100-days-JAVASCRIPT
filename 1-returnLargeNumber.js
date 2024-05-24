const number = [11, 22, 44, 55, 66, 33, 22, 55, 777, 88]


let x = number[0]

for (let index = 0; index < number.length; index++) {
    if (number[index] > x)
        x = number[index]
}

console.log(x)



number.forEach((e) => {
    const lenght = number.length

})