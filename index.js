/*
 * @Author: your name
 * @Date: 2021-11-09 15:16:36
 * @LastEditTime: 2021-11-17 14:10:26
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/index.js
 */
/*
 * @Author: your name
 * @Date: 2021-11-09 15:16:36
 * @LastEditTime: 2021-11-17 14:10:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/index.js
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './js/App';
import {name as appName} from './app.json';
import FetchDemoPage from './js/other/FetchDemoPage';
import LoginPage from './js/page/LoginPage';
import RegistrationPage from './js/page/RegistrationPage'
import StorageDemoPage from './js/other/StorageDemoPage';
import 'react-native-gesture-handler';
import AppNavigators from './js/navigator/AppNavigators';

AppRegistry.registerComponent(appName, () => App);
