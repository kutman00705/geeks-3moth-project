let catalog = document.querySelector(".catalog")

let showCatalog = async ()=>{
    try{
        let data = await fetch(" https://jsonplaceholder.typicode.com/posts").then(res=>res.json())
        data.map(item=>{
            let div = document.createElement("div")
            div.setAttribute("class", "catalog-card")
            div.innerHTML=`
                <img src="https://media.2x2tv.ru/content/images/2022/05/452b4714af0c5cc798644a8052c2fa41.jpg" alt="">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            `
            catalog.append(div)
        })


    }catch (e){
        console.error(e)
    }
}
showCatalog()


function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 5000);
}

setInterval(createPetal, 300);