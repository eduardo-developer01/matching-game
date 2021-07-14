import './style.css'
import { CardFrontBack } from '../../components/CardFrontBack'

function BoardGame(amountGame) {
	const $htmlCardFrontBack = CardFrontBack();
	const $htmlBoardGame = $htmlCardFrontBack.repeat(amountGame);

	return `
		<section class="board-game">
			${$htmlBoardGame}
		</section>
	`;
}

export default BoardGame;
