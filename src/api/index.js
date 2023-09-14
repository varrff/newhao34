import {getLiuyanData, postLiuyanData,getMusicList} from './request'
const baseURL = "http://api.newhao2021.top:3001"
const getMessageData = getLiuyanData(`${baseURL}/biaoqian/get`)
const postMessage = postLiuyanData(`${baseURL}/biaoqian/add`)
const getMusicListData = getMusicList(`${baseURL}/music/get`)
export {
    getMessageData,
    postMessage,
    getMusicListData
}