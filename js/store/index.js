/*
 * @Author: your name
 * @Date: 2021-11-17 11:10:32
 * @LastEditTime: 2021-11-17 16:28:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/store/index.js
 */
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';
/**
 * 自定义log中间件
 * @param {*} store 
 * @returns 
 */
const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatching a function');
    } else {
        console.log('dispatching',action);
    }
    const result = next(action);
    console.log('nextState',store.getState());
    return result;
};

const middlerwares=[
    logger,
    thunk
];

/**
 * 2、创建store
 */
export default createStore(reducers,applyMiddleware(...middlerwares));