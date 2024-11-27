const modal = document.querySelector('.modal')
const triggerButton = document.querySelector('#btn-get')
const closeButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

triggerButton.onclick = () => openModal()
closeButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

// setTimeout(openModal,10000)

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 5000);
}

setInterval(createPetal, 300);