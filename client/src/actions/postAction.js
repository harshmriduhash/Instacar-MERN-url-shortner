import {
    POST_URL
} from './types'
import {
    returnErrors
} from './errorAction'

export const postURL = postData => dispatch => {
    fetch('/api/v1/url/shorten', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: POST_URL,
            payload: data
        }))
        .catch(err => dispatch(returnErrors(err.response.status, err.response.data)))
}