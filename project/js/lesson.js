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



const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')

const converter = (element, targetElement) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/convertur.json',)
        request.setRequestHeader('Content-type', 'application/json')
        request.send()


        request.onload = () => {
            const data = JSON.parse(request.response)
            if (element.id === 'som'){
                targetElement.value = (element.value / data.usd).toFixed(2)
            }
            if (element.id === 'usd'){
                targetElement.value = (element.value * data.usd).toFixed(2)
            }
            if (element.value === ''){
                targetElement.value = ''
            }
        }
    }
}

converter(somInput, usdInput)
converter(usdInput, somInput)

// somInput.oninput = () =>{
//     const request = new XMLHttpRequest();
//     request.open('GET','../data/convertur.json', )
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.onload = () =>{
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//     }
// }
//
//
// usdInput.oninput = () =>{
//     const request = new XMLHttpRequest();
//     request.open('GET','../data/convertur.json', )
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.onload = () =>{
//         const data = JSON.parse(request.response)
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//     }
// }





const nextButton = document.querySelector('#btn-next')
const prevButton = document.querySelector('#btn-prev')
const cardBlock = document.querySelector('.card')
let cardIndex = 0;


nextButton.onclick = () =>{
    cardIndex++
    fetch(`http://jsonplaceholder.typicode.com/todos/${cardIndex}`)
        .then((response) =>response.json())
        .then((data) => {
            cardBlock.innerHTML=   `
                <p>${data.title}</p>
                <p>${data.completed}</p>
                <span>${data.id}</span>
            `
        })
}




//погода

const searchButton = document.querySelector('#search')
const searchInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const APP_ID= 'e417df62e04d3b1b111abeab19cea714'
const BASE_URL ='http://api.openweathermap.org/data/2.5/weather'

searchButton.onclick = () =>{
    fetch(`${BASE_URL}?appid=${APP_ID}&q=${searchInput.value}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            city.innerHTML = data.name
            temp.innerHTML = data.main.temp
        })
}