import {get, post} from './request'
const baseURL = "http://8.130.98.236:3001"
const getMessageData = get(`${baseURL}/biaoqian/get`)
const postMessage = post(`${baseURL}/biaoqian/add`)

export {
    getMessageData,
    postMessage
}