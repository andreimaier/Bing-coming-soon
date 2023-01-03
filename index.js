const input = document.querySelector("input")

console.log(input)


input.addEventListener('input', () => {
    if(/^[0-9]+$/.test(input.value)) {
        console.log('correct')
        input.style.outline = "2px solid Highlight"
        input.style.borderColor = "#c2d3ff"
    } else {
        console.log('else')
        input.style.borderColor = "red"
        input.style.outline = "1px solid transparent"
        
    }
})
input.addEventListener('focusin', () => {
    input.style.outline = "2px solid Highlight"
    input.style.borderColor = "#c2d3ff"
}) 
input.addEventListener('focusout', () => {
    input.style.outline = "none"
}) 