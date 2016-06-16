export default data => `<ul>${data.map(createItem).join('')}</ul>`;
 
function createItem(item){
    return `<li><ul>
                <li>${item.name}</li>
                <li>${item.number}</li>
            </ul></li>`;
}
