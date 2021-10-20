import axios from "axios"

const citiesActions = {
  getCities: () => {
    return async (dispatch) => {
      try {
        let res = await axios.get(
          "https://mytinerary-alessandro.herokuapp.com/api/cities"
        )
        let info = res.data.response
        dispatch({ type: "GET_ALL_CITIES", payload: info })
      } catch (error) {
        return { success: false, response: error }
      }
    }
  },
  filteredCities: (inputValue) => {
    return async (dispatch) => {
      dispatch({ type: "SEARCH_CITIES", payload: inputValue })
    }
  },
}

export default citiesActions
