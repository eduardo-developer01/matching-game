import './style.css'

import PlayerName from '../../components/PlayerName'
import { VsPlayer } from '../../components/VsPlayer'

export default function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName('Jogado 1')}
            ${VsPlayer()}
            ${PlayerName('Jogado 2')}
        </header>
    `
}
