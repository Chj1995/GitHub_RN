/*
 * @Author: your name
 * @Date: 2021-11-17 11:07:11
 * @LastEditTime: 2021-11-17 15:13:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/App.js
 */
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigator/AppNavigators';
import store from './store';

export default class App extends Component {
    render() {
        return <Provider store={store}>
            <AppNavigator/>
        </Provider>;
    }
}