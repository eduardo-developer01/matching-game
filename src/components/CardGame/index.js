import './style.css'

function CardGame(id) {
    return `
    <button>
        <article class="card-start">
                <img id="${id}" src="./img/alura-pixel.svg" />
        </article>
    </button>`;
}

export default CardGame
