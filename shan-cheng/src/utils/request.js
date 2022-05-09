/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/21 20:21
 */
import axios from 'axios'
import { Message } from "element-ui";
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 15000
})

//response interceptor
request.interceptors.response.use(
  response => {
    if (response.status!==200){
      Message.error("服务器异常")
    }
    if (response.data.status!=="10000"){
      Message.error(response.data.message)
    }
    return response.data
  }
)

export default request
