/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/23 21:30
 */
import request from "@/utils/request";

/*
* 查询所有项目
* */
export const findIcons = async (data) => request({url: 'icon/getByList', method: "POST", data})
