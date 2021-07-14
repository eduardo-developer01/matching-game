import "./style.css";

function CardGame(id) {
	return `
        <article class="card-start">
                <img id="${id}" src="./img/alura-pixel.svg" />
        </article>
    `;
}

export default CardGame;
