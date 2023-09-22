
fetch('http://localhost:3000/bolos').then((response) => response.json())
.then((data) => {
    const app = document.querySelector('.app')
    data.forEach(bolo => {
        const mostraBolo = `<h2> ${bolo.sabor} </h2>
        <img src="${bolo.imagem}"> </img>
        <p class='preco'>R$${bolo.preco}</p>`
        app.innerHTML += mostraBolo
    })
} )








