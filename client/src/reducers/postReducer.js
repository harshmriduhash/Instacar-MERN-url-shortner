import {
    POST_ERROR,
    POST_URL
} from '../actions/types'

const initialState = {
    newUrl: null,
    loading: false,
    msg: null,
    status: null

}

export default function (state = initialState, action) {
    switch (action.type) {
        case POST_URL:
            return {
                ...state,
                newUrl: action.payload
            };
        case POST_ERROR:
            return {
                ...state,
                newUrl: null,
                    msg: action.payload.msg,
                    status: action.payload.status,
                    loading: false
            };
        default:
            return state
    }
}