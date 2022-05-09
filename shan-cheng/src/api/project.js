/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/21 20:27
 */
import request from "@/utils/request";

/*
* 查询所有项目
* */
export const findPros = async (data) => request({url: 'project/getByList', method: "POST", data})


/*
* 查询单个项目
* */
export const findProById = async (data) => request({url: 'project/findProById', method: "POST", data})

/*
* 查询所有项目类型
* */
export const findProTypes = async (data) => request({url: 'project/type/getByList', method: "POST", data})

/*
* 修改项目参数
* */
export const updateProById = async (data) => request({url: 'project/updateProById', method: "POST", data})


/*
* 新增项目参数
* */
export const insertPro = async (data) => request({url: 'project/insertPro', method: "POST", data})


/*
* 删除项目
* */
export const deletePro = async (data) => request({url: 'project/deletePro', method: "POST", data})
