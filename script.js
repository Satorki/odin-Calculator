const displayShow = document.querySelector("#innerDisplay");


buttons[0].selector.addEventListener("click", () => {
  displayShow.innerText += buttons[0].do;
});
buttons[1].selector.addEventListener("click", () => {
  displayShow.innerText += buttons[1].do;
});
buttons[2].selector.addEventListener("click", () => {
  displayShow.innerText += buttons[2].do;
});
buttons[3].selector.addEventListener("click", () => {
  displayShow.innerText += buttons[3].do;
});
buttons[4].selector.addEventListener("click", () => {
  displayShow.innerText += buttons[4].do;
});
buttons[5].selector.addEventListener("click", () => {
  displayShow.innerText += buttons[5].do;
});
buttons[6].selector.addEventListener("click", () => {
  displayShow.innerText += buttons[6].do;
});
buttons[7].selector.addEventListener("click", () => {
  displayShow.innerText += buttons[7].do;
});
buttons[8].selector.addEventListener("click", () => {
  displayShow.innerText += buttons[8].do;
});
buttons[9].selector.addEventListener("click", () => {
  displayShow.innerText += buttons[9].do;
});
buttons[10].selector.addEventListener("click", () => {
  dividef();
});
buttons[11].selector.addEventListener("click", () => {
  multiplyf();
});
buttons[12].selector.addEventListener("click", () => {
  substracf();
});
buttons[13].selector.addEventListener("click", () => {
  addf();
});
buttons[14].selector.addEventListener("click", () => {
  displayShow.innerText += buttons[14].do;
});
buttons[15].selector.addEventListener("click", () => {
  clearf();
});
buttons[16].selector.addEventListener("click", () => {
  resultf();
});

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "0":
      displayShow.innerText += buttons[0].do;
      break;
    case "1":
      displayShow.innerText += buttons[1].do;
      break;
    case "2":
      displayShow.innerText += buttons[2].do;
      break;
    case "3":
      displayShow.innerText += buttons[3].do;
      break;
    case "4":
      displayShow.innerText += buttons[4].do;
      break;
    case "5":
      displayShow.innerText += buttons[5].do;
      break;
    case "6":
      displayShow.innerText += buttons[6].do;
      break;
    case "7":
      displayShow.innerText += buttons[7].do;
      break;
    case "8":
      displayShow.innerText += buttons[8].do;
      break;
    case "9":
      displayShow.innerText += buttons[9].do;
      break;
    case "/":
      dividef();
      break;
    case "*":
      multiplyf();
      break;
    case "-":
      substracf();
      break;
    case "+":
      addf();
      break;
    case ",":
      displayShow.innerText += buttons[14].do;
      break;
    case "clear":
      clearf();
      break;
    case "Enter":
      resultf();
      break;
    default:
      break;
  }
});

let numbers = [];
let metod = [];

const addf = () => {
  numbers.push(displayShow.innerText);
  displayShow.innerText = "";
  metod = "+";
  if (numbers.length > 1) {
    displayShow.innerText = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    numbers.pop();
    console.log(numbers);
    numbers[0] = displayShow.innerText;
    
  }
};

const dividef = () => {
  numbers.push(displayShow.innerText);
  displayShow.innerText = "";
  metod = "/";
};

const substracf = () => {
  numbers.push(displayShow.innerText);
  displayShow.innerText = "";
  metod = "-";
};

const multiplyf = () => {
  numbers.push(displayShow.innerText);
  displayShow.innerText = "";
  metod = "*";
};

const clearf = () => {
  numbers = [];
  displayShow.innerText = "";
};

const resultf = () => {
  numbers.push(displayShow.innerText);
  console.log(numbers);
  if (metod === "+") {
    displayShow.innerText = parseFloat(numbers[0]) + parseFloat(numbers[1]);
  } else if (metod === "-") {
    displayShow.innerText = parseFloat(numbers[0]) - parseFloat(numbers[1]);
  } else if (metod === "*") {
    displayShow.innerText = parseFloat(numbers[0]) * parseFloat(numbers[1]);
  } else if (metod === "/") {
    displayShow.innerText = parseFloat(numbers[0]) / parseFloat(numbers[1]);
  }
  numbers = [];

};

// const calculate = (a, b, metod) => {
//   if (metod === "+") {
//     return a + b;
//   } else if (metod === "-") {
//     return a - b;
//   } else if (metod === "*") {
//     return a * b;
//   } else if (metod === "/") {
//     return a / b;
//   } else {
//     return "In production.";
//   }
// };

// const test = (a) => {
//     a = displayShow.innerText
//   return console.log(a);
// }
