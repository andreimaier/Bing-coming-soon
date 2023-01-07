const form = document.querySelector("#form")
const email = document.querySelector('input')
const error = document.querySelector('.error')

function errorOn() {
    error.style.opacity= '1';
    error.style.transform = 'translateY(0)';
    error.style.transition = 'transform 300ms ease, opacity 300ms ease';
    email.style.border = '2px solid var(--errorRed)';
}

form.addEventListener('submit', (e) => {
    if(email.value == "" || email.value == null) {
        errorOn();
        e.preventDefault();
        document.querySelector('.error').textContent = "Whoops! It looks like you forgot to add your email"
    }
    else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(email.value)) {
        errorOn();
        e.preventDefault();
        document.querySelector('.error').textContent = "Please provide a valid email"
    }
})  

email.addEventListener('input', () => {
    email.style.border = '2px solid var(--blue)';
    error.style.opacity= '0';
    error.style.transform = 'translateY(-1rem)';
    error.style.transition = 'transform 300ms ease, opacity 300ms ease';
})
