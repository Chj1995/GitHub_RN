/*
 * @Author: your name
 * @Date: 2021-11-18 09:47:57
 * @LastEditTime: 2021-11-18 13:47:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/reducer/popular/index.js
 */
import Types from '../../action/types';

const defaultState = {};
/**
 * 如何动态的设置store，和动态获取store（难点：store Key不固定）
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export default function onAction(state = defaultState, action) {

    switch (action.type) {
        case Types.POPULAR_REFRESH_SUCCESS://下拉刷新成功
            return {
                ...state,
                [action.storeName]: {
                    //这里为了从action中取出storeName并作为{}中的key使用，所以需要借助[]，否则js语法检查不通过
                    ...state[action.storeName],//这里为了解构state中action.storeName对应的属性，所以需要用到[]
                    items: action.items,//原始数据
                    projectModes: action.projectModes,//此次要展示的数据
                    isLoading: false,
                    hideLoadingMore: false,
                    pageIndex: action.pageIndex
                }
            };
        case Types.POPULAR_REFRESH://下拉刷新
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: true,
                    hideLoadingMore: true,
                }
            };
        case Types.POPULAR_REFRESH_FAIL://下拉刷新失败
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: false,
                }
            };
        case Types.POPULAR_LOAD_MORE_SUCCESS://上拉加载更多成功
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    projectModes: action.projectModes,
                    hideLoadingMore: false,
                    pageIndex: action.pageIndex
                }
            };
        case Types.POPULAR_LOAD_MORE_FAIL://上拉加载更多失败
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    hideLoadingMore: true,
                    pageIndex: action.pageIndex
                }
            };
        default:
            return state;
    }
}