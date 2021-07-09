import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import CardGame from './src/components/CardGame'

const $app = document.querySelector('#app')
const $foo = CardGame().repeat(6)

$app.insertAdjacentHTML('beforeend', $foo)
