
export const initialState = {
    myFavorites: []
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'AGREGAR':
            return { ...state, myFavorites: [...state.myFavorites, action.payload] }
        case 'ELIMINAR':
            return { 
                ...state, myFavorites: state.myFavorites.filter(element => element.id !== action.payload)
            }
        default:
            return { ...state };
    }
}

export default rootReducer;