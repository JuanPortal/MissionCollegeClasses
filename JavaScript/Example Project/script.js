// alert("Hello from script.js!")

let courseCode = "CS112"
let courseName = "Programming in Javascript"
let courseFullName = courseCode + " - " + courseName
// console.log(courseFullName)

// console.log(10+"10")

const h1 = document.getElementById("h1")
// h1.innerText = "Hello, CS112!"

const form = document.getElementById('form')
const textInput = document.getElementById("textInput")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const copiedText = document.getElementById("copiedText")
const img = document.getElementById("img")

button1.addEventListener('click', () => {
    alert("Hello, world!")
})

button2.addEventListener('click', () => {
    h1.innerText = "Hello, " + textInput.value + "!"
})

button3.addEventListener('click', () => {
    copiedText.innerText = textInput.value
})

button4.addEventListener('click', () => {
    img.src = textInput.value
})