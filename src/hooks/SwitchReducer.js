// THE "SAINT" REDUCER FUNCTION
// Import it from another file
export const switchReducer = (state, action) => {
    if (action.type === 'switchMain') {
        if (state.main) { // setting main to false
            return {
                main: !state.main,
                secondary1: false,
                secondary2: false,
                secondary3: false,
            }
        } else { // setting main to true
            return {
                ...state,
                main: !state.main
            }
        }
    } else if (action.type === 'switchSecondary' && state.main) {
        switch (action.count) {
            case 1:
                return { ...state, secondary1: !state.secondary1 }
            case 2:
                return { ...state, secondary2: !state.secondary2 }
            case 3:
                return { ...state, secondary3: !state.secondary3 }
            default:
                break;
        }

    }

    return state;
}
export default switchReducer;