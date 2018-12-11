var pDemo = document.getElementById("demo")
var imageSrc = document.getElementById("img")

pDemo.innerHTML = "Hello World"
// document.getElementsByClassName("demo2").innerHTML = "HAHAHA"
// document.getElementsByTagName("p")

imageSrc.src = "https://images.unsplash.com/photo-1534983283799-b12a2ad6b1a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"

pDemo.style.color = "red"

// Event handlers
// onclick=js
// element.addEventListener(event, function, useCapture)

// element.addEventListener("click" function() {
//   do something
// })

// element.addEventListener("click", myFunction)

//   function myFunction () {
//     do something
//   }

var colors = ["blue", "red", "#E0FF89", "#E8B6C1", "#7DFFF3"]
var btn = document.getElementById("btn")

btn.addEventListener("click", changeColor)
function changeColor() {
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}


// Scope

// var foo = 'bar'; //global

// function someFunction(params1, params2) { // params1 and 2 are local
//   var bar = 'foo' //local
// }

// function myFunction() {
//   console.log(bar) //error not defined locally like the previous function
//   console.log(foo) // 'bar' globally scoped
// }

// function whatIsThis() {
//   baz = "what variable is this?"
// }

// // console.log(baz)

// whatIsThis()

// console.log(baz)

// myFunction()

// object

// datatypes
//   string, booleans, numbers, null, undefined, symbol

// arrays, hashes, function, classes

// window object what the user sees
  // global
  // function calls

var num = 23
console.log(this.num)
console.log(this)
  // it will define whatever scope it is, if not defaults to windowsx

var person = {
  firstName: 'Bob',
  lastName: 'Smith',
  func: function() {
    return this.firstName + " " + this.lastName
  }
}

console.log(person.func())