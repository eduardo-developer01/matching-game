import CardGame from "../../components/CardGame";

function BoardGame(amountGame) {
	const $htmlCardGame = CardGame();
	const $htmlBoardGame = $htmlCardGame.repeat(amountGame);

	return $htmlBoardGame;
}

export default BoardGame;
