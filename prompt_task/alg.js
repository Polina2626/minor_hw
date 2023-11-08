let ready = confirm('Вы готовы?');

let num = Math.floor(Math.random() * 50);

let num_user;

let correct_result;

let attempts = 0;

if (ready) {
    num_user = prompt('Угадайте целое задуманное число от 0 до 50');
    attempts += 1;
} 


if (num_user == num) {
    correct_result  = confirm(`Вы угадали число за 1 попытку! Ответ: ${num}`);
}
else if (num_user != num) {
    
    while (num_user != num) {
        if (num_user < num) {
            num_user = prompt('Ваше число меньше задуманного. Попробуйте еще');
            attempts += 1;
        }
        else if (num_user > num) {
            num_user = prompt('Ваше число больше задуманного. Попробуйте еще');
            attempts += 1;
        }
    }
    correct_result  = confirm(`Вы угадали число  ${num}. Количество попыток: ${attempts}`);
}