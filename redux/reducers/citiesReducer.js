const states = {
    allCities: [],
    filteredCities: []
}

const citiesReducer = (state = states, action) => {
    switch(action.type) {
        case 'GET_ALL_CITIES':
            return {
                ...state,
                allCities: action.payload,
                filteredCities: action.payload
            }
        case 'SEARCH_CITIES':
            return{
                ...state,
                filteredCities: state.allCities.filter((city) => (city.city.toLowerCase().startsWith(action.payload.trim().toLowerCase())))
            }
        default: 
            return state
    }
}
export default citiesReducer