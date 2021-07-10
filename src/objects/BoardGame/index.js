import './style.css'
import CardGame from "../../components/CardGame";

function BoardGame(amountGame) {
	const $htmlCardGame = CardGame();
	const $htmlBoardGame = $htmlCardGame.repeat(amountGame);

	return `
		<section class="board-game">
			${$htmlBoardGame}
		</section>
	`;
}

export default BoardGame;
