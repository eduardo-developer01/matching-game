import './style.css'
import CardGame from './src/components/CardGame'

const $app = document.querySelector('#app')
const $foo = CardGame().repeat(100)

$app.insertAdjacentHTML('beforeend', $foo)
