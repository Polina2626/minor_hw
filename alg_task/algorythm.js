const checkButton = document.getElementById('checkButton');

function checkAnswer() {
    
    const elementD = document.getElementById('d').value;
    const elementA = document.getElementById('a').value;
    console.log(elementD, elementA);

    if (Math.sqrt((elementA * elementA) * 2) <= elementD) {
        document.getElementById('result_in_form').value = 'Можно';
    }
    else {
        document.getElementById('result_in_form').value = 'Нельзя';

    }
}


checkButton.addEventListener('click', checkAnswer);