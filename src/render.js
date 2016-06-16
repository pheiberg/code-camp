import renderList from './components/listRenderer';
import search from './components/search';

export default data => search.renderBox() + renderList(data);