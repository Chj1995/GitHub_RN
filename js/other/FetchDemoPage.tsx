
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Constants from '../expand/Constants';
import { get } from '../expand/HiNet';

export default (pros: any) => {
    const [msg, setMsg] = useState('');
    // 函数
    const doFetch = () => {
        // // fetch发起网络请求
        // fetch('https://api.devio.org/uapi/test/test?requestPrams=aa')
        //     // 获取网络请求返回的数据，原始数据解析成json
        //     .then(res => res.json())
        //     //取出json数据
        //     .then(result => {
        //         setMsg(JSON.stringify(result));
        //     }).catch(e => {//异常捕获
        //         console.log(e);
        //         setMsg(JSON.stringify(e));
        //     })
        get(Constants.test.api)({requestParams:'RN'}).then(result => {
            console.log('dddd' + result);
            
            setMsg(JSON.stringify(result));
        }).catch(e => {
            console.log(e);
            setMsg(JSON.stringify(e));
        })
    }
    return (
        <SafeAreaView style={StyleSheet.root}>
            {/* 按钮 */}
            <TouchableOpacity onPress={doFetch}>
                <Text>加载</Text>
            </TouchableOpacity>
            <Text>{msg}</Text>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    root: {
        flex: 1,
    },
});
