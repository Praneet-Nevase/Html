var choice = prompt("Welcome to Perimeter Calculator \n 1. Perimeter of rectangle \n 2. Perimeter of triangle \n 3. Perimeter of Circle \n 4. Perimeter of square")

if (choice == '1') {
    var l = prompt("Enter length")
    var b = prompt("Enter breadth")
    var result = 2 * (Number(l) + Number(b))
    alert("The perimeter is " + result)
}

if (choice == '2') {
    var s = prompt("Enter side1 length")
    var b = prompt("base")
    var s2 = prompt("Enter side2 length")
    var result = Number(s) + Number(b) + Number(s2)
    alert("The perimeter is " + result)
}

if (choice == '3') {
    var r = prompt("Enter radius")
    var result = 3.14 * 2 * Number(r)
    alert("The perimeter is " + result)
}

if (choice == '4') {
    var s = prompt("Enter side length")
    var result = Number(s) * 4
    alert("The perimeter is " + result)
}