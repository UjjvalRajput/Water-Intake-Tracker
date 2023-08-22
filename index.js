let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    totalEl.textContent = `Total: ${parseInt(totalEl.textContent.split(":")[1].trim()) + 1}`
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
