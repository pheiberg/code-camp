import renderList from './render';
import renderSearch from './components/search';
import store from './components/store';

const itemUrl = 'http://localhost:3000/items';
const main = document.getElementById('main');

const renderMain = data => main.innerHTML = renderList(data);
store.addListener(renderMain);

const header = document.getElementById('header');
header.innerHTML = renderSearch.renderBox('search');
const search = document.getElementById('search');
search.addEventListener('input', e => {console.log(e.target.value); store.setFilter(e.target.value); });

const itemData = fetch(itemUrl);
itemData.then(result => result.json())
    .then(store.setData);


