const handlePopup = (state = false, action: { type: any; handleOk: any }) => {
    switch (action.type) {
        case 'OK':
            return action.handleOk;
        default:
            return state;
    }
}

export default handlePopup