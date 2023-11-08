const button = document.getElementById('for_click')

function find_and_edit() {
    document.getElementsByTagName('div')[3].innerHTML = 'Koblova'
    console.log(document.getElementsByTagName('div')[3].innerHTML)
    document.getElementsByTagName('div')[4].innerHTML = 'Polina'
    console.log(document.getElementsByTagName('div')[4].innerHTML)
    document.getElementsByTagName('div')[5].innerHTML = 'Sergeevna'
    console.log(document.getElementsByTagName('div')[5].innerHTML)
}

button.addEventListener('click', find_and_edit)


