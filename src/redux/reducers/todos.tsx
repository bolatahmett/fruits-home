const todos = (state = "", action: { type: any; id: any; text: any }) => {
    switch (action.type) {
        case 'CHANGE_CONTENT':
            return action.text;
        default:
            return state
    }
}

export default todos