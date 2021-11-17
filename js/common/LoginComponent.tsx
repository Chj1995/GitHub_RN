/*
 * @Author: your name
 * @Date: 2021-11-15 09:18:05
 * @LastEditTime: 2021-11-15 14:31:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/common/LoginComponent.tsx
 */
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Linking } from 'react-native';

export const Input = (props: any) => {
    const { label, placeholder, shortLine, secure, onChangeText } = props;
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.row}>
                <Text style={styles.inputLabel}>{label}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                    //大小写
                    autoCapitalize="none"
                    onChangeText={onChangeText}
                />
            </View>
            <View style={{
                height: 0.5,
                backgroundColor: '#D0D4D4',
                marginLeft: shortLine ? 20 : 0
            }}
            />
        </View>
    );
};
/**
 * 登录按钮
 * @param props 
 * @returns 
 */
export const ConfirmButton = (props: any) => {
    const { title, onClick } = props;
    return (
        <TouchableOpacity style={styles.confirmLayout} onPress={onClick}>
            <Text style={styles.confirmTitle}>{title}</Text>
        </TouchableOpacity >
    );
};
/**
 * 
 * @param props 查看帮助
 * @returns 
 */
export const Tips = (props: any) => {
    const { msg, helpUrl } = props;
    return (
        <View style={styles.tipsLayout}>
            <Text style={styles.tips}>{msg}</Text>
            {!!helpUrl && (<Button title='查看帮助' onPress={() => {
                Linking.openURL(helpUrl)
            }} />)}
        </View>
    );
};
/**
 * 导航栏
 * @param props 
 * @returns 
 */
export const NavBar = (props: any) => {

    const { title, rightTitle, onRightClick } = props;
    return (
        <View style={styles.navBar}>
            {/* 空白view，使登录view局中 */}
            <View />
            {/* 登录view */}
            <View style={styles.titleLayout}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {/* 注册按钮 */}
            <TouchableOpacity onPress={onRightClick}>
                <Text style={styles.button}>{rightTitle}</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    inputLabel: {
        marginLeft: 15,
        marginTop: 18,
        marginBottom: 18,
        fontSize: 16,
        width: 90
    },
    input: {
        flex: 1,
        marginRight: 15
    },
    confirmLayout: {
        backgroundColor: '#2196F3',
        alignItems: 'center',
        padding: 12,
        margin: 20,
        marginTop: 30,
        borderRadius: 5
    },
    confirmTitle: {
        fontSize: 20,
        color: 'white'
    },
    tipsLayout: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tips: {
        fontSize: 14,
        color: 'red'
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 44
    },
    titleLayout: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    button: {
        color: '#007AFF',
        paddingRight: 15,
        fontSize: 16
    }
});