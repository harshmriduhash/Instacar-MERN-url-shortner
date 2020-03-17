import {
    POST_ERROR
} from './types'

//Return Errors
export const returnErrors = (status, msg) => {
    return {
        type: POST_ERROR,
        payload: {
            status,
            msg
        }
    }
}