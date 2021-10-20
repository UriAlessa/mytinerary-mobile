import axios from "axios"

const likesActions = {
  like: (id, token) => {
    return async (dispatch, getState) => {
      getState()
      try {
        const response = await axios.post(
          "https://mytinerary-alessandro.herokuapp.com/api/likes",
          { id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        dispatch({ type: "LIKE", payload: response.data })
      } catch (error) {
        return { success: false, response: error }
      }
    }
  },
  dislike: (id, token) => {
    return async (dispatch, getState) => {
      getState()
      try {
        const response = await axios.post(
          "https://mytinerary-alessandro.herokuapp.com/api/dislike",
          { id },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        dispatch({ type: "LIKE", payload: response.data })
      } catch (error) {
        return { success: false, response: error }
      }
    }
  },
}

export default likesActions
