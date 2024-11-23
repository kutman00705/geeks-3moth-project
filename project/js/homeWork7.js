let catalog = document.querySelector(".catalog")

let showCatalog = async ()=>{
    try{
        let data = await fetch(" https://jsonplaceholder.typicode.com/posts").then(res=>res.json())
        data.map(item=>{
            let div = document.createElement("div")
            div.setAttribute("class", "catalog-card")
            div.innerHTML=`
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVQM_RCyOq-HApzXsJheE61ER3RQaHiRVMg&s" alt="">
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