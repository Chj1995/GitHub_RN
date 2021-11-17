/*
 * @Author: your name
 * @Date: 2021-11-16 15:38:24
 * @LastEditTime: 2021-11-16 17:24:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/navigator/NavigationDelegate.js
 */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export function tabNav({ Component, keys, theme, extra = {} = {} }) {
    return (<Tab.Navigator
        screenOptions={{
            lazy: true,// 懒加载，只显示我们当前显示的tab
            tabBarItemStyle: styles.tabStyle,
            tabBarScrollEnabled: true,//是否支持选项卡滚动，默认false
            tabBarInactiveTintColor: 'white',//非激活下的颜色
            tabBarActiveTintColor: 'white',//激活下的颜色
            tabBarStyle: {
                backgroundColor: theme.themeColor,//TabBar的背景颜色 
            },
            // 标签指示器样式
            tabBarIndicatorStyle: styles.indicatorStyle,
            //文本的样式
            tabBarLabelStyle: styles.labelStyle
        }}
    >

        {Object.entries(_genTabs({ Component, keys, theme, extra })).map(
            (item) => {
                return (
                    <Tab.Screen
                        key={item[0]}
                        name={item[0]}
                        // 要显示的元素
                        component={item[1].screen}
                        options={item[1].navigationOptions}
                    />
                )
            }
        )}
    </Tab.Navigator>)
}

/**
 * 
 * @param Component 页面
 * @param keys 数据
 * @param theme 主题
 * @param extra 扩展参数，可传可不传
 * @returns 
 */
function _genTabs({ Component, keys, theme, extra = {} = {} }) {
    const tabs = {};
    keys.forEach((item, index) => {
        if (item.checked) {
            tabs[`tab${index}`] = {
                screen: (props) => (<Component {...props} {...extra} tabLabel={item.name} theme={theme} />),
                navigationOptions: {
                    title: item.name,
                }
            };
        }
    });
    return tabs;
}

const styles = StyleSheet.create({
    tabStyle: {
        padding: 0,
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
    },
    labelStyle: {
        textTransform: 'none',//取消大小写
        fontSize: 13,
        margin: 0
    }
})