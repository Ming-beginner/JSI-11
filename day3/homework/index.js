const countryList = ['Viet Nam', 'The USA', 'South Korea', 'Japan', 'Laos', 'Cambodia', 'Thailand', 'China', 'Australia', 'Canada', 'Russia', 'Other'];
const positionList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let countrySelectWrapper = document.querySelector('.country-select-wrapper');
let positionSelectWrapper = document.querySelector('.position-select-wrapper');

//Render country select
let countrySelect = document.createElement('select');
let countrySelctOtp1 = createOption('Select country', true, true, true);
countrySelect.appendChild(countrySelctOtp1);
countryList.forEach(country => {
    let option = createOption(country);
    countrySelect.append(option);
})
countrySelectWrapper.appendChild(countrySelect);

//Render position select
let positionSelect = document.createElement('select');
let positionSelctOtp1 = createOption('Choose desired position', true, true, true);
positionSelect.appendChild(positionSelctOtp1);
positionList.forEach(position => {
    let option = createOption(position);
    positionSelect.append(option);
})
positionSelectWrapper.appendChild(positionSelect);



let inputList = document.querySelectorAll('input, textarea');


//Submit
let submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', () => {
    console.log(countrySelect.value, positionSelect.value);
    let countryError = createErrorText('Please select a country');
    let countryErrorNode = document.querySelector('.country-error-text-wrapper');
    if (countrySelect.value == 'null') {
        if (!countryErrorNode.querySelector('p')) {
            countryErrorNode.appendChild(countryError);
        }
    } else {
        if (countryErrorNode.querySelector('p')) {
            countryErrorNode.removeChild(countryErrorNode.querySelector('p'));
        }
    }
    let positionError = createErrorText('Please choose a desired position');
    let positionErrorNode = document.querySelector('.position-error-text-wrapper');
    if (positionSelect.value == 'null') {
        if (!positionErrorNode.querySelector('p')) {
            positionErrorNode.appendChild(positionError);
        }
    } else {
        if (positionErrorNode.querySelector('p')) {
            positionErrorNode.removeChild(positionErrorNode.querySelector('p'));
        }
    }
    inputList.forEach(input => {
        if (input.nodeName.toLowerCase() != 'textarea' && input.type != 'file') {
            let inputType = convertType(input.id.split('-')[0]);
            if (input.value.length <= 0) {
                if (input.parentNode.querySelector('p')) {
                    console.log(1234);
                    input.parentNode.removeChild(input.parentNode.querySelector('p'));
                }
                input.parentNode.appendChild(createErrorText(`Please input your correct ${inputType}`));
            } else if (input.parentNode.querySelector('p')) {
                input.parentNode.removeChild(input.parentNode.querySelector('p'));
            }

        } else if (input.type == 'file') {
            let errorNode = document.querySelector('.file-error-wrapper');
            let error = createErrorText('Please add your CV');
            if (input.files.length <= 0) {
                if (!errorNode.querySelector('p')) {
                    errorNode.appendChild(error);
                }
            } else {
                if (errorNode.querySelector('p')) {
                    errorNode.removeChild(errorNode.querySelector('p'));
                }
            }

        }
    })
})


//Reset
let resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', () => {
    inputList.forEach(input => {
        input.value = '';
        if (input.parentNode.querySelector('p')) {
            input.parentNode.removeChild(input.parentNode.querySelector('p'));
        }
    });
    countrySelctOtp1.selected = true;
    positionSelctOtp1.selected = true;

})

function convertType(inputType) {
    switch (inputType) {
        case 'fname':
            return 'first name';
        case 'lname':
            return 'last name';
        case 'phone':
            return 'phone number';
        case 'email':
            return 'email address';
        case 'city':
            return 'city';
        case 'address':
            return 'address';
    }
}

function createOption(value, disabled = false, selected = false, noValue = false) {
    let option = document.createElement('option');
    option.value = noValue ? null : value;
    option.innerHTML = value;
    option.disabled = disabled;
    option.selected = selected;
    return option;
}

function createErrorText(text) {
    let errorText = document.createElement('p');
    errorText.classList.add('error-text');
    errorText.innerText = text;
    return errorText;
}