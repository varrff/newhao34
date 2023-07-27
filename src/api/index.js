import {get, post} from './request'
const baseURL = "http://api.newhao2021.top:3001"
const getMessageData = get(`${baseURL}/biaoqian/get`)
const postMessage = post(`${baseURL}/biaoqian/add`)

export {
    getMessageData,
    postMessage
}