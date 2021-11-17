/*
 * @Author: your name
 * @Date: 2021-11-16 14:09:45
 * @LastEditTime: 2021-11-17 09:22:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/page/TrendingPage.js
 */
import React, { Component } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
import { tabNav } from '../navigator/NavigationDelegate';
import keys from '../res/data/langs.json'
import NavigationBar from 'react-native-navbar-plus'

export default class TrendingPage extends Component {
    render() {
        let navigationBar = <NavigationBar
            title={'趋势'}
            
        />
        const TabNavigator = keys.length ?
            tabNav({ Component: TrendingTabBar, theme: { themeColor: '#008D7D' }, keys }) : null;
        return (
            <View style={styles.container}>
                {/* {navigationBar} */}
                {TabNavigator}
            </View>
        );
    }
}
class TrendingTabBar extends Component {
    render() {
        const { tabLabel } = this.props;
        return (<Text>{tabLabel}</Text>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})