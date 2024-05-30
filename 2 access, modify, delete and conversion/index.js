const data = require("./data_validation.json");

// Access json data

console.log(data.friends[0].name);
console.log(data.friends[0].age);

// Modify json data

data.friends[0].name = "Robin";
console.log(data.friends);

// delete json data

delete data.friends[0];
console.log(data);

// loop json data

for (let x in data) {
  console.log(x);
  console.log(data[x]);
}

// conversion json data
// client data send to server

let data2 = {
  name: "tushae",
  age: 21,
  cgpa: 3.92,
};

const loaddata = JSON.stringify(data2);
console.log(loaddata);

// server data send to client

console.log(JSON.parse(loaddata));
