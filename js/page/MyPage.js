/*
 * @Author: your name
 * @Date: 2021-11-16 14:09:45
 * @LastEditTime: 2021-11-17 15:49:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /GitHub_RN/js/page/MyPage.js
 */
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Button
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
import action from '../action';
import { connect } from 'react-redux';

class MyPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MyPage</Text>
                <Button title='改变主题' onPress={() => {
                    this.props.onThemeChange('yellow');
                }} />
            </View>
        );
    }
}
//将dispatch映射给onThemeChange
const mapDispatchToProps = (dispatch) => ({
    onThemeChange: (theme) => dispatch(action.onThemeChange(theme))
});
//将函数注入到props里面
export default connect(null, mapDispatchToProps)(MyPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        marginLeft: 100,
    }
})