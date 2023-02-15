function forOfExample1() {
  const users = [
    {
      name: "dor",
      age: 24,
    },
    {
      name: "roi",
      age: 23,
    },
    {
      name: "daniel",
      age: 27,
    },
  ];

  for (const user of users) {
    console.log(user);
    console.log(user.name + "(" + user.age + ")");
  }
}
