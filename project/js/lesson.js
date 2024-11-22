//PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'правелный номер '
        phoneResult.style.color = "green"
    }else{
        phoneResult.innerHTML = 'неправелный номер'
        phoneResult.style.color = "red"
    }
}


//TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const  tabs = document.querySelectorAll('.tab_content_item')
const tabsParents = document.querySelector('.tab_content_items')


const hideTabContent = () =>{
    tabContentBlocks.forEach((block) =>{
        block.style.display = 'none'
    })
    tabs.forEach((tab) =>{
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (id = 0) =>{
    tabContentBlocks[id].style.display = 'block'
    tabs[id].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabsParents.onclick =(event) =>{
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab,tabIndex) =>{
            if (event.target === tab){
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}
let counter = 0;

setInterval(() => {
    // Скрываем текущий контент
    hideTabContent();

    // Увеличиваем счетчик и делаем проверку на выход за пределы массива
    counter = (counter + 1) % tabs.length
    // Показываем контент для текущей вкладки
    showTabContent(counter);
}, 3000);



window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight) {
        openModal()
    }
});


//CONVERTOR
//
// const charactersList = document.querySelector('.characters_list')
//
// const generateCharactersCads =() =>

//DRY-don`t repeat yourself
//KISS-keep it super simple
// cart svicher
//
// const nextButton = document.querySelector('#btn-next')
// const prevButton = document.querySelector('#btn-prev')
// const cardBlock = document.querySelector('.card')
// let carIndex = 0
//
//
// nextButton.onclick = () =>{
//     carIndex++
//     fetch(`https://jsonplaceholder.typicode.com/todos/${carIndex}`)
//         .then((response) => response.json())
//         .then((data) => {
//             cardBlock.innerHTML = `
//             <p>${data.title}</p>
//             <p>${data.completed}</p>
//             <span>${data.id}</span>
//                 `
//         })
// }
