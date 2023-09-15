//Todo componente é uma função JS que vai retornar js, html e Css;


//Classe que herda elementos html
class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});   
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    
    //estruturando o component

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement('span');
        autor.textContent = "By " + (this.getAttribute('autor') || "Anonymous");

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('titulo');
        linkTitle.href = this.getAttribute('link-url');

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('conteudo');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute("class", "card_right")

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('image-url') || "img/user-front-side-with-white-background.jpg";
        newsImage.alt = "foto da noticia";

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    //estilizando o component
    
    styles(){
        const style = document.createElement('style');
        style.textContent = `
        * {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        font-family: 'Segoe UI', sans-serif;
    }
    
    .card {
        margin: auto;
        margin-top: 75px;
        display: flex;
        flex-direction: row;
        width: 80%;
        justify-content: space-between;
        -webkit-box-shadow: -1px 7px 60px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 7px 60px 0px rgba(0, 0, 0, 0.7/5);
        box-shadow: -1px 7px 60px 0px rgba(0, 0, 0, 0.75);
    }
    
    img {
        height: 190px;
    }
    
    .card_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
    
    .card_left span {
        font-weight: 400;
    }
    
    .card_left a {
        margin-top: 15px;
        color: black;
        text-decoration: none;
        font-weight: 500;
        font-size: 25px;
    }
    
    .card_left p {
        color: rgb(70, 70, 70);
    }
        `;
    return style;
    }
    
}

customElements.define('card-news', Cardnews);