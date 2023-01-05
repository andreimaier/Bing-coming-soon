const form = document.querySelector("#form")
const email = document.querySelector('input')
const error = document.querySelector('.error')





form.addEventListener('submit', (e) => {
    e.preventDefault();
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regex.test(email.value)) {
        console.log('lala')
    }   else {
        console.log('sorry')
    }
})








        /* console.log('correct')
        input.style.outline = "2px solid Highlight"
        input.style.borderColor = "#c2d3ff"
        error.style.opacity = "0";
        
    } else {
        console.log('else')
        input.style.borderColor = "red"
        input.style.outline = "1px solid transparent"
        error.style.opacity = "1";
        
    } */




/* })
input.addEventListener('focusin', () => {
    input.style.outline = "2px solid Highlight"
    input.style.borderColor = "#c2d3ff"
}) 
input.addEventListener('focusout', () => {
    input.style.outline = "none"
})  */