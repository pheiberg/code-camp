const state = {
    data: [],
    itemFilter: '',
    getFilteredData: () => {
        const theFilter = state.itemFilter.toLowerCase();
        return state.itemFilter ? state.data.filter(item => item.name.toLowerCase().indexOf(theFilter) > -1) : state.data;
    }
};
let listeners = [];

export default {
    setData: data => {
        state.data = data;
        update();
    },
    addListener: listener => {
        listeners.push(listener);
    },
    setFilter: value => {
        state.itemFilter = value;
        update();
    }
};

function update(){
    listeners.forEach(function(listener) {
        listener(state.getFilteredData());
    });
}

