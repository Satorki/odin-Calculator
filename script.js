let a
let b
let metod


const calculate = (a, b, metod) => {
  if (metod === "+") {
    return a + b
  } else if (metod === "-") {
    return a - b
  } else if (metod === "*") {
    return a * b
  } else if (metod === "/"){
    return a / b
  } else {
    return "In production."
  }
}

console.log(calculate(5,6,"*"));