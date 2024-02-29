const displayShow = document.querySelector("#innerDisplay");

// CREATING A SPECIFCATIONS FOR BUTTON
class Button {
  constructor(selector, doing) {
    this.element = document.querySelector(selector);
    this.doing = doing;
  }
  mouseClick() {
    this.element.addEventListener("click", () => {
      typeof this.doing === "function"
        ? this.doing()
        : (displayShow.innerText += this.doing);
    });
  }
  buttonClick() {
    document.addEventListener("keydown", (event) => {
      event.key === "0"
        ? typeof this.doing === "function"
          ? this.doing()
          : (displayShow.innerText += this.doing)
        : "nothing";
    });
  }
}

// CREATING A NUMBER BUTTONS
let numberButtons = [];
for (let i = 0; i <= 9; i++) {
  numberButtons[i] = new Button("#a" + i, i);
  numberButtons[i].mouseClick();
  numberButtons[i].buttonClick();
}

// CREATING A CALCULATING FUNCTIONS
let numbers = [];

const addf = () => {
  numbers.push(parseFloat(displayShow.innerText));
  numbers.push("+");
  displayShow.innerText = "";
};

const dividef = () => {
  numbers.push(parseFloat(displayShow.innerText));
  numbers.push("/");
  displayShow.innerText = "";
};

const substracf = () => {
  numbers.push(parseFloat(displayShow.innerText));
  numbers.push("-");
  displayShow.innerText = "";
};

const multiplyf = () => {
  numbers.push(parseFloat(displayShow.innerText));
  numbers.push("*");
  displayShow.innerText = "";
};

const resultf = () => {
  numbers.push(parseFloat(displayShow.innerText));
  let calculated = numbers.reduce((acc, cur, ind, arr) => {
    if (typeof cur !== "number") {
      return acc;
    } else {
      if (arr[ind - 1] === "+") {
        return acc + cur;
      } else if (arr[ind - 1] === "/") {
        return acc / cur;
      } else if (arr[ind - 1] === "-") {
        return acc - cur;
      } else if (arr[ind - 1] === "*") {
        return acc * cur;
      } else {
        return cur;
      }
    }
  }, 0);
  console.log(numbers);
  console.log(calculated);
  displayShow.innerText = calculated
  numbers = [];
};

// CLEAR BUTTON FUNCTION
const clearf = () => {
  numbers = [];
  displayShow.innerText = "";
};

// CREATING A FUNCTIONAL BUTTONS
const functionalButtonsParameters = [
  { selector: "#clear", doing: clearf },
  { selector: "#divide", doing: dividef },
  { selector: "#multiply", doing: multiplyf },
  { selector: "#substract", doing: substracf },
  { selector: "#add", doing: addf },
  { selector: "#result", doing: resultf },
  { selector: "#colon", doing: "." },
];

const functionalButtons = [];

functionalButtonsParameters.forEach(({ selector, doing }) => {
  const button = new Button(selector, doing);
  button.mouseClick();
  button.buttonClick();
  functionalButtons.push(button);
});
