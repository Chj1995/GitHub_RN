/*
 * @Author: your name
 * @Date: 2021-11-15 16:41:15
 * @LastEditTime: 2021-11-16 15:18:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/page/Popularpage.js
 */
import React, { Component } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

export default class FavoritePage extends Component {
    render() {
        return (
          <View style={styles.container}>
              <Text>FavoritePage</Text>
          </View>  
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        marginLeft: 100,
    }
})