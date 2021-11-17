/*
 * @Author: your name
 * @Date: 2021-11-15 16:41:15
 * @LastEditTime: 2021-11-17 16:33:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/page/Popularpage.js
 */
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Button
} from 'react-native';
import { tabNav } from '../navigator/NavigationDelegate';
import keys from '../res/data/key.json';
import NavigationBar from 'react-native-navbar-plus';
import action from '../action';
import { connect } from 'react-redux';

export default class PopularPage extends Component {
    
    render() {
        let navigationBar = <NavigationBar
            title={'最热'}
        />
        const TabNavigator = keys.length ?
            tabNav({ Component: PopularTabPage, theme: { themeColor: '#2196f3' }, keys }) : null;
        return (
            <View style={styles.container}>
                {navigationBar}
                {TabNavigator}
            </View>
        );
    }
}

class PopularTab extends Component {
    
    render() {
        const { tabLabel, onThemeChange } = this.props;
        return (<View>
            <Text>{tabLabel}</Text>
            <Button title='改变主题' onPress={() => {
                onThemeChange('red');
            }} />
        </View>)
    }
}

// 将dispatch映射给onThemeChange
const mapDispatchToProps = (dispatch) => ({
    onThemeChange: (theme) => dispatch(action.onThemeChange(theme))
});
//将函数注入到props里面
const PopularTabPage = connect(null, mapDispatchToProps)(PopularTab);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})