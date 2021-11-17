/*
 * @Author: your name
 * @Date: 2021-11-15 16:48:53
 * @LastEditTime: 2021-11-16 13:35:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/navigator/AppNavigators.js
 */
/*
 * @Author: your name
 * @Date: 2021-11-15 16:48:53
 * @LastEditTime: 2021-11-16 11:35:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/navigator/AppNavigators.js
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomPage from '../page/WelcomPage';
import LoginPage from '../page/LoginPage';
import RegistrationPage from '../page/RegistrationPage';
import HomePage from '../page/HomePage';
import WebViewPage from '../page/WebViewPage';
import DetailPage from '../page/DetailPage';
import SortKeyPage from '../page/SortKeyPage';
import SearchPage from '../page/SearchPage';
import CustomKeyPage from '../page/CustomKeyPage';
import AboutPage from '../page/about/AboutPage';
import AboutMePage from '../page/about/AboutMePage';
import CodePushPage from '../page/CodePushPage';

const Stack = createNativeStackNavigator();
//配置除Tab页以外的的页面
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    name="WelcomPage"
                    component={WelcomPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="LoginPage"
                    component={LoginPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RegistrationPage"
                    component={RegistrationPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomePage"
                    component={HomePage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="WebViewPage"
                    component={WebViewPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DetailPage"
                    component={DetailPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SortKeyPage"
                    component={SortKeyPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SearchPage"
                    component={SearchPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CustomKeyPage"
                    component={CustomKeyPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AboutPage"
                    component={AboutPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AboutMePage"
                    component={AboutMePage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CodePushPage"
                    component={CodePushPage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
