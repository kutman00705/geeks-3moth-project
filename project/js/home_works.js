

document.getElementById('submit').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailPattern.test(email)) {
        message.textContent = "правилный Gmail!";
        message.style.color = "green";
    } else {
        message.textContent = "неправилный Gmail, проверьте ввод.";
        message.style.color = "red";
    }
});

function moveBlockInCircle(block, container, positionX = 0, positionY = 0, direction = 'right') {
    const maxRight = container.offsetWidth - block.offsetWidth;
    const maxBottom = container.offsetHeight - block.offsetHeight;

    // Определяем направление движения и изменяем позицию
    if (direction === 'right') {
        if (positionX < maxRight) {
            positionX += 5;
        } else {
            direction = 'down';
        }
    } else if (direction === 'down') {
        if (positionY < maxBottom) {
            positionY += 5;
        } else {
            direction = 'left';
        }
    } else if (direction === 'left') {
        if (positionX > 0) {
            positionX -= 5;
        } else {
            direction = 'up';
        }
    } else if (direction === 'up') {
        if (positionY > 0) {
            positionY -= 5;
        } else {
            direction = 'right';
        }
    }

    // Обновляем позицию блока
    block.style.left = `${positionX}px`;
    block.style.top = `${positionY}px`;

    // Рекурсивный вызов с задержкой для плавности движения
    setTimeout(() => moveBlockInCircle(block, container, positionX, positionY, direction), 20);
}

// Запуск анимации
document.addEventListener('DOMContentLoaded', () => {
    const smallBlock = document.getElementById('smallBlock');
    const container = document.getElementById('container');
    moveBlockInCircle(smallBlock, container);
});





const secondsBlock = document.querySelector('#seconds');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let seconds = 0
let interval = null

startBtn.onclick = () => {
    if (!interval){
        interval = setInterval(() => {
            seconds++
            secondsBlock.innerHTML = seconds
        }, 1000)
    }
}

stopBtn.onclick = () =>{
    clearInterval(interval)
}

resetBtn.onclick = () => {
    seconds= 0
    secondsBlock.innerHTML = seconds
    clearInterval(interval)
    interval = null
}




const charactersList = document.querySelector('.characters-list');

const generateCharactersCards = () => {
    const request = new XMLHttpRequest();
    request.open('GET','../data/character.json');
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.onload = () =>{
        const data = JSON.parse(request.response)
        data.forEach(character => {
            const characterCard = document.createElement('div')
            characterCard.classList.add('character-card')

            characterCard.innerHTML = `
                <img style="height: 300px" src="${character.photo}" alt="">
                <h2>${character.name} </h2>
                <h3>age: ${character.age} </h3>
            `

            charactersList.append(characterCard)
        })

    }

}

generateCharactersCards()


const req = new XMLHttpRequest();
req.open('POST','../data/character.json');
req.send()
req.onload=()=>{
    const data2 = JSON.parse(req.response)
    console.log(data2)
}