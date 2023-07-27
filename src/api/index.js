import {get, post} from './request'
const baseURL = "/api"
const getMessageData = get(`${baseURL}/biaoqian/get`)
const postMessage = post(`${baseURL}/biaoqian/add`)

export {
    getMessageData,
    postMessage
}