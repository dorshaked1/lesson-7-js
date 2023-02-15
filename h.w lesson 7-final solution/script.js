const person = {
  name: "dor",
  age: "24",
  email: "dorshaked7@gmail.com",
  phone: "0523183030",
  address: {
    city: "binyamina",
    street: "haziporen",
    number: 2,
  },
};

function objectToul(obj) {
  let html = "<ul>";

  for (const key in obj) {
    if (typeof obj[key] ===  "object") {
      html += `<li> ${key} => ${objectToul(obj[key])}</li>`;
    } else {
      html += `<li> ${key} => ${obj[key]} </li>`;
    }
    html += `</ul>`;
  }
  return html;
}
document.body.innerHTML = objectToul(person);
debugger;
