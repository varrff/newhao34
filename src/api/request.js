import axios from 'axios'

const ERR_OK = 1
const ERR_NO = 0

export function get(url){
   return function(params){
        return axios.get(url,{
            params
        }).then(res=>{
            return res.data
        }).catch(e=>e)
   }
}

export function post(url){
    return function(params){
         return axios.post(`${url}?value=${params}`).then(res=>{
             return res
         }).catch(e=>e)
    }
 }