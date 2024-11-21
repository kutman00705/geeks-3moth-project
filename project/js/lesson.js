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

const tabContentBlocks = document.querySelectorAll('#tab_container')
const  tabs = document.querySelectorAll('#tab_content_item_active')

const hideTabContent = () =>{
    tabContentBlocks.forEach(block =>{
        block.style.display = 'none'
    })
}

//CONVERTOR

const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')

const converter =(element,targetElement) => {
    element.oninput =() =>{
        const request = new XMLHttpRequest()
        request.open('GET','./data/convertur.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            if(element.id==='som'){
                targetElement.value= (element.value)
            }
        }
    }
}

somInput.oninput = () => {
    const request = new XMLHttpRequest()
    request.open('GET','./data/convertur.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.onload = () =>{
        const data = JSON.parse(request.response)
        usdInput.value = (somInput.value /data.usd).toFixed(2)
    }
}


usdInput.oninput = () => {
    const request = new XMLHttpRequest()
    request.open('GET','./data/convertur.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.onload = () =>{
        const data = JSON.parse(request.response)
        somInput.value = (usdInput.value * data.usd).toFixed(2)
    }
}

//DRY-don`t repeat yourself
//KISS-keep it super simple
// cart svicher

const nextButton = document.querySelector('#btn-next')
const prevButton = document.querySelector('#btn-prev')
const cardBlock = document.querySelector('.card')
let carIndex = 0


nextButton.onclick = () =>{
    carIndex++
    fetch(`https://jsonplaceholder.typicode.com/todos/${carIndex}`)
        .then((response) => response.json())
        .then((data) => {
            cardBlock.innerHTML = `
            <p>${data.title}</p>
            <p>${data.completed}</p>
            <span>${data.id}</span>
                `
        })
}
