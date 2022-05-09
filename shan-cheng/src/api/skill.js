/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/21 20:27
 */
import request from "@/utils/request";

/*
* 查询所有项目
* */
export const findSki = async (data) => request({url: 'skill/getByList', method: "POST", data})


export const findSkiById = async (data) => request({url: 'skill/getSkiById', method: "POST", data})


export const deleteSki = async (data) => request({url: 'skill/deleteSki', method: "POST", data})


export const insertSki = async (data) => request({url: 'skill/insertSki', method: "POST", data})
