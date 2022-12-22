// add code snippets from README
let state;

function reducer(state = {
    count: 0
}, action) {
    switch (action.type) {
        case "counter/increment":
            return {
                count: state.count + 1
            };
        default:
            return state;
    }
}

function dispatch(action) {
    state = reducer(state, action);
    render();
}

function render() {
    const counter = document.getElementById('button')
    counter.textContent = state.count
}

let button = document.getElementById('button')

button.addEventListener('click', () => {
    dispatch({
        type: 'counter/increment'
    })
})

dispatch({
    type: "@@INIT"
});