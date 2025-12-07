let num = prompt("Enter a number: ");
    num = Number(num);

    if (num >= 1 && num % 2 === 0) {
      console.log("Possitive and Even");
    } else if (num >= 1 && num % 2 !== 0) {
      console.log("Possitive and Odd");
    } else if (num <= -1 && num % 2 === 0) {
      console.log("Negative and Even");
    } else if (num % 2 !== 0 && num <= -1) {
      console.log("Negative and Odd");
    } else {
      console.log("Zero");
    }