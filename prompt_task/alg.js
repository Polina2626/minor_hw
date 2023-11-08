let ready = confirm('Вы готовы?');

let num = Math.floor(Math.random() * 50);

let num_user;

let attempts = 0;

if (ready) {

    while (true) {
        num_user = parseInt(prompt('Введите число'));
        attempts += 1;
        if (num_user == num) {
            
            alert(`Вы угадали число ${num}. Количество попыток: ${attempts}`);
            break;
        }

        else if (num_user != num) {
            if (num_user < 0  || num_user > 50) {
                alert('Ваше число вне диапазона');
                attempts -= 1;
            }

            // else if (num_user > 50) {
            //     alert('Вы ввели слишком большое число');
            // }

            else if (num_user < num) {
                alert('Ваше число меньше задуманного. Попробуйте еще');
            }
            else if (num_user > num) {
                alert('Ваше число больше задуманного. Попробуйте еще');
            }

            else if (typeof num_user != Number) {
                alert('Вы ввели не числовое значение');
                attempts -= 1;
            }

        }
    }

    // num_user = parseInt(prompt('Введите число'));
    // attempts += 1;

    // if (num_user == num) {
    //     alert(`Вы угадали число ${num}. Количество попыток: ${attempts}`)
    // }


    // else if (num_user != num) {


    //     while (num_user != num) {
    //         num_user = parseInt(prompt('Введите число'));
    //         attempts += 1;

    //         if (num_user < 0) {
    //             alert('Вы ввели слишком маленькое число');
    //         }

    //         else if (num_user > 50) {
    //             alert('Вы ввели слишком большое число');
    //         }

    //         else if (num_user < num) {
    //             alert('Ваше число меньше задуманного. Попробуйте еще');
    //         }
    //         else if (num_user > num) {
    //             alert('Ваше число больше задуманного. Попробуйте еще');
    //         }

    //         else if (typeof num_user != Number) {
    //             alert('Вы ввели не числовое значение');
    //         }
    //     }

    //     confirm(`Вы угадали число  ${num}. Количество попыток: ${attempts}`);
    // }



}



