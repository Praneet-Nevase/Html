var myform = document.getElementById("myform");
var myInput = document.getElementById("myitem");
var myItem = document.getElementById("myItem");

myform.addEventListener("submit", function (event) {
    event.preventDefault()
    createItem(myinput.value)
})

function createItem(Inputitem) {
    var items = `<li>${Inputitem}
    <button onclick="deleteItem(this)">Delete</button> </li>`
    myItem.insertAdjacentHTML("beforeend", items)
    myInput.value = ""
    myInput.focus()
}

function deleteItem(ElementToDelete) {
    ElementToDelete.parentElement.remove()
}