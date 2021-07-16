import './style.css'

import PlayerName from '../../components/PlayerName'

export default function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName('Jogado 1')}
            ${PlayerName('Jogado 2')}
        </header>
    `
}
