import './style.css'
import { setupCounter } from './counter.js'

const food = [
    {
        id: 1,
        name: 'burger',
        price: 150
    },
    {
        id: 2,
        name: 'ham burger',
        price: 200
    },
    {
        id: 3,
        name: 'fry',
        price: 1
    }
];

document.querySelector('#app').innerHTML = food.map(item => `${item.name}: ${item.price}$`).join('<br>');

setupCounter(document.querySelector('#counter'))
