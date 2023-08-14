const button = document.getElementById("demo")

demo.addEventListener("click", () => {
    const colors = ["red", "blue", "green", "orange", "purple", "pink", "brown", "black", "gray", "yellow"]

    let randomNumber = Math.floor(Math.random() * colors.length)
    let randomColor = colors[randomNumber]
    button.style.background = randomColor
    button.style.color = "aqua"
})


const h1 = document.getElementById("h1")

h1.addEventListener("click", () => {
    const colors = ["red", "blue", "green", "orange", "purple", "pink", "brown", "black", "gray", "yellow"]

    let randomNumber = Math.floor(Math.random() * colors.length)
    let randomColor = colors[randomNumber]
    h1.style.color = randomColor
})