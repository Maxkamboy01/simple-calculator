// var result = 0;
// var actionType = "";

// function numberClicked(number) {
//   var inputTag = document.getElementById("input");
//   var inputValue = inputTag.value;
//   if (inputValue !== "0") {
//     inputValue += number;
//   } else {
//     inputValue = number;
//   }
//   inputTag.value = inputValue;
// }

// function actionClicked(action) {
//   var inputTag = document.querySelector("#input");
//   const inputValue = Number(inputTag.value);
//   inputTag.value = 0;

//   if (action === "=") {
//     switch (actionType) {
//       case "+":
//         result += inputValue;
//         break;
//       case "-":
//         result -= inputValue;
//         break;
//       case "*":
//         result *= inputValue;
//         break;
//       case "/":
//         result /= inputValue;
//         break;
//     }
//     inputTag.value = result;
//     actionType = "";
//   } else {
//     if (actionType === "") {
//       result = inputValue;
//     } else {
//       switch (actionType) {
//         case "+":
//           result += inputValue;
//           break;
//         case "-":
//           result -= inputValue;
//           break;
//         case "*":
//           result *= inputValue;
//           break;
//         case "/":
//           result /= inputValue;
//           break;
//       }
//     }
//     actionType = action;
//   }
//   // actionType = action;
//   console.log(result);
// }

// function deleteInputValue() {
//   document.querySelector("#input").value = 0;
// }

function darkMode() {
  document.querySelector("body").classList.toggle("darkmode");
  document.querySelector(".dark-mode-btn").classList.toggle("black");
}

var result = 0;
var actionType = "";
var equalClicked = false;

function numberClicked(number) {
  var inputTag = document.getElementById("input");
  var inputValue = inputTag.value;
  if (inputValue === "0" || equalClicked) {
    inputValue = number;
  } else {
    inputValue += number;
  }
  equalClicked = false;
  inputTag.value = inputValue;
}

function actionClicked(action) {
  const inputTag = document.getElementById("input");
  const inputValue = Number(inputTag.value);
  inputTag.value = 0;

  if (action === "=") {
    if (actionType === "") {
      result = inputValue;
    } else {
      switch (actionType) {
        case "+":
          result += inputValue;
          break;
        case "-":
          result -= inputValue;
          break;
        case "*":
          result *= inputValue;
          break;
        case "/":
          result /= inputValue;
          break;
      }
    }
    inputTag.value = result;
    actionType = "";
    equalClicked = true;
    result = 0;
  } else {
    if (actionType === "") {
      result = inputValue;
    } else {
      switch (actionType) {
        case "+":
          result += inputValue;
          break;
        case "-":
          result -= inputValue;
          break;
        case "*":
          result *= inputValue;
          break;
        case "/":
          result /= inputValue;
          break;
      }
    }
    actionType = action;
  }

  console.log(result);
}

function cleanInput() {
  document.getElementById("input").value = 0;
  result = 0;
}
