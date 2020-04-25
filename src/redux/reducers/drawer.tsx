const drawer = (state = false, action: { type: any; visible: any }) => {
    switch (action.type) {
        case 'OPEN_DRAWER':
            return action.visible;
        default:
            return state
    }
}

export default drawer