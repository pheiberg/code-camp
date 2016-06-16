import component from './components/component1';
import render from './render';

const itemUrl = 'http://localhost:3000/items';
const main = document.getElementById('main');

const itemData = fetch(itemUrl);
itemData.then(result => result.json())
    .then(json => render(json))
    .then(html => main.innerHTML = html);
