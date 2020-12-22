export const initialState = {
    user: null,
    modalShow: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",
    CLOSE_MODAL: "CLOSE_MODAL",
    OPEN_MODAL: "OPEN_MODAL",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.CLOSE_MODAL:
            return {
                ...state,
                modalShow: action.modal,
            };
        case actionTypes.OPEN_MODAL:
            return {
                ...state,
                modalShow: true
            }
        default:
            return state;
    }
};

export default reducer;
