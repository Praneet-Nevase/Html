var choice = prompt("Welcome to Area Calculator \n 1. Area of rectangle \n 2. Area of triangle \n 3. Area of Circle \n 4. Area of parallelogram")

if (choice=='1') {
  var l = prompt("Enter length")
  var b = prompt("Enter breadth")
  var result = Number(l) * Number(b)
  alert("The area is " + result)
}

if (choice == '2') {
    var h = prompt("Enter height")
    var b = prompt("base")
    var result = Number(h) * Number(b) / 2
    alert("The area is " + result)
}

if (choice == '3') {
    var r = prompt("Enter radius")
    var result = 3.14 * Number(r) * Number(r)
    alert("The area is " + result)
}

if (choice == '4') {
    var h = prompt("Enter height")
    var cb = prompt("Enter corresponding base")
    var result = Number(h) * Number(cb)
    alert("The area is " + result)
}