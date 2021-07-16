import CardGame from "../CardGame";
import './style.css'

export function CardFrontBack() {
    return `
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame('javascript', 'logo do javascript')}
            </div>
        </article>
    `
}
