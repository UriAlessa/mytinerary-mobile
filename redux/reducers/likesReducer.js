const states = {
    itineraries: [],
}

const likesReducer = (state = states, action) => {
    switch(action.type) {
        case 'LIKE':
            return {
              ...state,
              itineraries: state.itineraries.map(itinerary => itinerary._id === action.payload.response._id ? action.payload.response : itinerary)
            }
        default: 
            return state
    }
}
export default likesReducer