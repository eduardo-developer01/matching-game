import CardGame from "../CardGame";

export function CardFrontBack() {
    return /*html*/`
        <article class="card-front-end">
            ${CardGame()}
            ${CardGame('javascript', 'logo do javascript')}
        </article>
    `
}
