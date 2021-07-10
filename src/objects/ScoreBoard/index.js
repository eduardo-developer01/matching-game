import './style.css'

import PlayerName from '../../components/PlayerName'

export default function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName('player 1')}
            ${PlayerName('player 2')}
        </header>
    `
}
