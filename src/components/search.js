export default {
    renderBox : render
};

let handlers = [];

function render(id) {
    return `<label for="search">Search</label><input name="${id}" id="${id}" type="text"/>`;
}

function init(element, callback){
    handlers.push(callback);
    element.addEventListener('update', callback);
}

function destroy(element) {
    handlers.forEach(function(element) {
        element.removeEventListener('update', element);
    }, this);
    handlers = [];
}