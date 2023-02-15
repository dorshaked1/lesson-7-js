function whileExample1() {
  let i = 0;
  while (i < 100) {
    console.log(i);
    i += 5;
  }
  alert("after while");
}
function whileExample2() {
  let userInput = prompt("what is the password");
  console.log(userInput);
  while (userInput != 1234) {
    alert("your enter is not allow");
    userInput = prompt("what is the password");
    console.log(userInput);
  }
  alert("you welcome to the site");
}

function doWhileExample1() {
  let i = 0;
  do {
    console.log(i);
  } while (i < 100);
  alert("after while");
}
function doWhileExample2() {
  let userInput = "";
  do {
    userInput = prompt("what is the password");
    if (userInput != 1234) {
      alert("your enter is not allow");
    }
  } while (userInput != 1234);
  alert("your enter is allow ");
}

function forExample1() {
  // for(/* only one before the for loop stats */;/*before each iteration if true does the iteration*/;/* after each iteration*/){/*the code*/}

  for (let i = 100; i > 0; i -= 20) {
    console.log(i);
  }
}

function printAllCharactersBetween(from, to) {
  for (let i = from.charCodeAt(0); i < to.charCodeAt(0); i += 1) {
    console.log(i, String.fromChartCode(i));
  }
}
function forExample2() {
  printAllCharactersBetween("A", "Z");
}

function printAllLetters() {
  for (let i = 0; i != "\x00"; i += 1) {
    console.log(i, string.fromChartCode(i));
  }
}
/* for in loop*/
function forInExample1() {
  const obj = {
    a: 5,
    b: 7,
    c: 10,
  };
  for (const key in obj) {
    console.log(key);
  }
}
/*for of loops*/
function forOfExample1() {
  const arr = ["a", "b", "c", "d", "e", "f"];
  for (const key of arr) {
    console.log(key);
  }
}
