/* const emailInput = document.getElementById('exampleInputEmail1');
const passwordInput = document.getElementById('exampleInputPassword1');
const checkInput = document.getElementById('exampleCheck1');
const submitBtn = document.getElementById('submit-btn');

const errorTexts = document.getElementsByClassName('error-text');

submitBtn.addEventListener('click', () => {
    if (checkInput.checked) {
        handleErrorText(2, 'inactive');
        handleSubmit();
    } else {
        handleErrorText(2, 'active');
        handleErrorText(0, 'inactive');
        handleErrorText(1, 'inactive');
    }
})

function handleSubmit() {
    let email = emailInput.value;
    let password = passwordInput.value;
    console.log(email.length);
    let isCorrectEmail;
    let isCorrectPassword;
    if (email.length <= 0) {
        isCorrectEmail = handleErrorText(0, 'active');
    } else {
        isCorrectEmail = handleErrorText(0, 'inactive');

    }
    if (password.length <= 0) {
        isCorrectPassword = handleErrorText(1, 'active');
    } else {
        isCorrectPassword = handleErrorText(1, 'inactive');
    }
    if (isCorrectEmail && isCorrectPassword) {
        alert('Đăng kí thành công!');
    }
}

function handleErrorText(index, job) {
    if (job == 'active') {
        errorTexts[index].classList.add('active');
        return false;
    }
    if (job == 'inactive') {
        errorTexts[index].classList.remove('active');
        return true;
    }
} */

let root = document.querySelector('.root');
let select = document.createElement('select');
let option1 = createOption('volvo');
let option2 = createOption('saab');
let option3 = createOption('mercedes');
let option4 = createOption('Audi');
select.append(option1, option2, option3, option4);
root.appendChild(select);

function createOption(value) {
    let option = document.createElement('option');
    option.innerHTML = value.charAt(0).toUpperCase() + value.slice(1);
    option.value = value;
    return option;
}