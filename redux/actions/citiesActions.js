import axios from 'axios'

const citiesActions = {
    getCities: () => {
        return async (dispatch, getState) => {
            try {
                let res = await axios.get('https://mytinerary-alessandro.herokuapp.com/api/cities') 
                let info = res.data.response
                dispatch({type: 'GET_ALL_CITIES', payload: info})
            } catch(error) {
                console.log(error)
            }
        }
    },
    filteredCities: (inputValue) => {
        return async (dispatch, getState) => {
            dispatch({type: 'SEARCH_CITIES', payload: inputValue})
        }
    }
}

export default citiesActions