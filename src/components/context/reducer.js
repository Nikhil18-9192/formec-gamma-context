
function reducer(state = initial, action) {
    switch (action.type) {
        case "toggle":
            return {
                ...state,
                toggle: action.payload
            }
        default:
            return state;
    }
}
export default reducer