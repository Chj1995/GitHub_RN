/*
 * @Author: your name
 * @Date: 2021-11-17 11:13:02
 * @LastEditTime: 2021-11-18 14:06:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/reducer/index.js
 */
import { combineReducers } from 'redux';
import theme from './theme';
import popular from './popular';

/**
 * 1、合并reducer
 */
const index = combineReducers({
    theme: theme,
    popular: popular,
});

export default index;