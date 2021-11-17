/*
 * @Author: your name
 * @Date: 2021-11-15 16:44:48
 * @LastEditTime: 2021-11-16 11:34:14
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/page/CodePushPage.js
 */
import React, { Component } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

export default class Index extends Component {
    render() {
        NavigationUtil.navigation = this.props.navigation;
        return (
          <View style={styles.container}>
              <Text>首页</Text>
          </View>  
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})