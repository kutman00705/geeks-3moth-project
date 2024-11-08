

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