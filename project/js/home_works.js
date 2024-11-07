

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