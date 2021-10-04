const states = {
    allComments: [],
}

const commentsReducer = (state = states, action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            console.log(action.payload)
            return {
                ...state,
                allComments: action.payload.response.comments,
            }
        default: 
            return state
    }
}
export default commentsReducer