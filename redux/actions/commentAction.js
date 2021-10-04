import axios from 'axios'

const commentAction = {
    postComment: (comment, token, itineraryId) => {
        return async (dispatch, getState) => {
            getState()
            try {
                let response = await axios.post(`https://mytinerary-alessandro.herokuapp.com/api/itinerary/${itineraryId}`, {...comment}, {
                    headers: {
                        Authorization: 'Bearer '+ token
                    }})
                dispatch({type: 'ADD_COMMENT', payload: response.data})
            } catch (error) {
                console.log(error)
            }
        }
    },
}

export default commentAction