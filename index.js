const num = +prompt("Please, enter a number")

for (let i = 0; i <= num; i++) {
    if (i % 5 == 0){
        console.log(i)
    } else if (num < 5){
        console.log("Sorry, no numbers")
    }
}