import "./style.css";

export default function CardGame(icon = "alura", alt = "loo da alura") {
    return `
        <article class="card-start">
                <img src="./img/${icon}.svg" alt="${alt}"/>
        </article>
    `;
}
