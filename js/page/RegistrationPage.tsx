/*
 * @Author: your name
 * @Date: 2021-11-15 09:17:12
 * @LastEditTime: 2021-11-16 11:11:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/page/LoginPage.tsx
 */
import React, { useState } from 'react';
import { Input, ConfirmButton, Tips, NavBar } from '../common/LoginComponent';
import {
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';
import LoginDao from '../expand/LoginDao';
import { Linking } from 'react-native';
import Constants from '../expand/Constants';
import NavigationUtil from '../navigator/NavigationUtil';
export default (pros: any) => {
    const { navigation } = pros;
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [mukeID, setMukeID] = useState('');
    const [orderID, setOrderID] = useState('');
    const [msg, setMsg] = useState('ddd');
    const [helpUrl, setHelpUrl] = useState('https:www.baidu.com');
    const onRegist = () => {
        if (userName === '' || password === '') {
            setMsg('用户名或密码不能为空');
        } 
        if (mukeID === '') {
            setMsg('慕课网ID不能为空');
        } 
        if (orderID === '') {
            setMsg('课程订单号不能为空');
        } 
        setHelpUrl('');
        setMsg('');
        LoginDao.getInstance()
        .login(userName,password)
        .then((res) => {
            setMsg('注册成功');
        }).catch((e) => {
            const {code,data:{helpUrl = ''} ={}, msg} = e;
            setMsg(msg);
            setHelpUrl(helpUrl)
        })
     };
    return (
        <SafeAreaView style={styles.root}>
            <NavBar title='注册' rightTitle='登录' 
                onRightClick={()=>{
                    debugger
                    NavigationUtil.login({navigation});
                }}
            />
            <View style={styles.line} />
            <View style={styles.content}>
                <Input
                    label="用户名"
                    placeholder="请输入用户名"
                    shortLine={true}
                    onChangeText={(text: string) => setUserName(text)}
                />
                <Input
                    label="密码"
                    placeholder="请输入密码"
                    secure={true}
                    onChangeText={(text: string) => setPassword(text)}
                />
                <Input
                    label="慕课网ID"
                    placeholder="请输入你的慕课网用户ID"
                    shortLine={true}
                    onChangeText={(text: string) => setUserName(text)}
                />
                <Input
                    label="课程订单号"
                    placeholder="请输入课程订单号"
                    secure={true}
                    onChangeText={(text: string) => setPassword(text)}
                />
                <ConfirmButton title="注册" onClick={onRegist} />
                <Tips msg={msg} helpUrl={helpUrl} />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    content: {
        paddingTop: 20,
        backgroundColor: '#F1F5F6',
        flexGrow: 1//填充剩余空间
    },
    line: {
        height: 0.5,
        backgroundcolor: 'D0D4D4'
    }
});