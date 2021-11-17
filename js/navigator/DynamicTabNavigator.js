/*
 * @Author: your name
 * @Date: 2021-11-16 14:11:45
 * @LastEditTime: 2021-11-17 15:19:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/page/DynamicTabNavigator.js
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
//页面
import PopularPage from '../page/Popularpage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
//图标
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

// Tab导航
const Tab = createBottomTabNavigator();
//样式
const TABS = {
    // 在这里配置页面的路由
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '最热',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <MaterialIcons name={'whatshot'} size={26} style={{ color: color }} />
            )
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={'md-trending-up'} size={26} style={{ color: color }} />
            )
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <MaterialIcons name={'favorite'} size={26} style={{ color: color }} />
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <Entypo name={'user'} size={26} style={{ color: color }} />
            )
        }
    }
};
 class DynamicTabNavigator extends Component {
    _tabNavigator() {
        //从TABS取出4个页面，
        const { PopularPage, TrendingPage, FavoritePage, MyPage } = TABS;
        const tabs = { PopularPage, TrendingPage, FavoritePage, MyPage };//根据需要定制显示的tab
        // PopularPage.navigationOptions.tabBarLabel='最热1';//动态改变tab属性
        const themeColor = this.props.theme.themeColor||this.props.theme;
        return (
            <Tab.Navigator>
                {Object.entries(tabs).map((item) => {
                    return (
                        <Tab.Screen
                            key={item[0]}
                            name={item[0]}
                            // 要显示的元素
                            component={item[1].screen}
                            options={{...(item[1].navigationOptions),tabBarActiveTintColor:themeColor}}
                        />)
                })}
            </Tab.Navigator>
        );
    }
    render() {
        const Tab = this._tabNavigator();
        return Tab;
    }
}

const mapStateToProps=(state)=> ({
    theme: state.theme.theme
});

export default connect(mapStateToProps)(DynamicTabNavigator);