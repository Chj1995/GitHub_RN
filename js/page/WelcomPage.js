/*
 * @Author: your name
 * @Date: 2021-11-16 11:05:38
 * @LastEditTime: 2021-11-16 15:01:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/page/WelcomPage.js
 */
import React, { Component } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
import { getBoarding } from '../util/BoardingUtil';

export default class WelcomPage extends Component {
    //页面装载
    componentDidMount() {
        this.doLaunch();
    }
    //页面卸载，得记得对定时器也进行卸载
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    async doLaunch(){
        const boarding = await getBoarding();
        const {navigation}=this.props;
        // 定时器，延时200毫秒
        this.timer=setTimeout(()=>{
            // if (boarding) {
                NavigationUtil.resetHomePage({navigation});
            // } else {
            //     NavigationUtil.login({navigation});
            // }
        },200);
    }
    render() {
        NavigationUtil.navigation = this.props.navigation;
        return (
          <View style={styles.container}>
              <Text>欢迎</Text>
          </View>  
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 100,
        top: 100,
    }
})