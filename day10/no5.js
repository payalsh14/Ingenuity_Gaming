var people = [
    { name: "Ashish", age: 23 },
    { name: "Ajay", age: 21 },
    { name: "Arvind", age: 26 },
    { name: "Mahesh", age: 28 },
    { name: "Jay", age: 19 }
]

var result = people.filter(user => user.age <= 25);
document.body.style.backgroundColor = "#f3f3f3";
document.body.style.fontSize="40px";
document.write(JSON.stringify(result));

