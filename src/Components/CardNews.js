class CardNews extends HTMLElement {
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){
        // criando elementos
        const componentRoot = document.createElement("div")
        const cardLeft = document.createElement("div")
        const cardRight = document.createElement("div")
        const autor = document.createElement("span")
        const linkTitle = document.createElement("a")
        const newsContent = document.createElement("p")
        const newsImage = document.createElement("img")

        // setando atributos
        componentRoot.setAttribute("class", "card")
        cardLeft.setAttribute("class", "card-left")
        cardRight.setAttribute("class", "card-right")

        // fazendo os appends
        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)
        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)
        cardRight.appendChild(newsImage)

        // criando as props
        autor.textContent = "By " + (this.getAttribute("autor") || "Anononymus")
        linkTitle.textContent = this.getAttribute("titulo")
        newsContent.textContent = this.getAttribute("content")
        linkTitle.href = this.getAttribute("link-url")
        newsImage.src = this.getAttribute("image") || "../../assets/default.jpg"
        newsImage.alt = this.getAttribute("alt-text")

        return componentRoot
    }

    styles(){
        const style = document.createElement("style")

        style.textContent = `
            .card {
                width: 80%;
                margin: 15px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                -webkit-box-shadow: 10px 10px 35px 2px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 35px 2px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 35px 2px rgba(0,0,0,0.75);
            }
            
            .card-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
                width: 80%;
            }
            
            .card-left span {
                font-weight: 400;
            }
            
            .card-left h1 {
                margin: 10px;
                font-size: 25px;
            }
            
            .card-left p {
                color: gray;
            }
            
            .card-right {
                display: flex;
                align-items: center;
                justify-content: end;
            }
            
            .card-right img {
                width: 60%;
            };
    
        `

        return style
    }
}

customElements.define("card-news", CardNews)