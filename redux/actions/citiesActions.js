import axios from 'axios'

const citiesActions = {
    getCities: () => {
        return async (dispatch, getState) => {
            try {
                let res = await axios.get('http://localhost:4000/api/cities') 
                let info = res.data.response
                console.log(info)
                // dispatch({type: 'GET_ALL_CITIES', payload: info})
            } catch(error) {
                console.log(error)
            }
        }
    },
}